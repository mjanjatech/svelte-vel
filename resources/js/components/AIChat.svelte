<script lang="ts">

  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  
  const { critiqueId, initialInteractions = [] }: { critiqueId: number; initialInteractions?: any[] } = $props();
  
  let newMessage = $state("");
  let chatHistory = $derived([...initialInteractions]);
  let isStreaming = $state(false);
  
  async function sendMessage() {
    if (!newMessage.trim() || isStreaming) return;
    
    isStreaming = true;
    const userMessage = newMessage.trim();
    
    // Optimistic UI update
    chatHistory = [...chatHistory, { sender_type: 'lead', message: userMessage }];
    newMessage = "";
    
    try {
      const response = await fetch(`/critiques/${critiqueId}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
      
      const data = await response.json();
      
      chatHistory = [...chatHistory, { sender_type: 'ai', message: data.response }];
    } catch (error) {
      console.error('Error sending message:', error);
      chatHistory = [...chatHistory, { sender_type: 'ai', message: 'Sorry, I encountered an error processing your message.' }];
    } finally {
      isStreaming = false;
    }
  }
  
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  // Suggested questions based on chat history
  const suggestedQuestions = $derived(
    chatHistory.length === 0 
      ? ["Why is my score low?", "How much would it cost to fix these issues?", "What's the main problem with my website?"] 
      : []
  );
</script>

<Card>
  <CardHeader>
    <CardTitle>Aidan, your AI Auditor</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4">
    <div class="h-96 overflow-y-auto space-y-4 p-4 bg-slate-50 rounded-lg">
      {#each chatHistory as chat}
        <div class={`flex gap-2 ${chat.sender_type === 'lead' ? 'justify-end' : 'justify-start'}`}>
          <div class={`max-w-[75%] p-3 rounded-lg ${
            chat.sender_type === 'lead' ? 'bg-blue-500 text-white' : 'bg-white border'
          }`}>
            <p class="text-sm">{chat.message}</p>
          </div>
        </div>
      {/each}
      
      {#if isStreaming}
        <div class="flex gap-2">
          <div class="max-w-[75%] p-3 rounded-lg bg-white border">
            <p class="text-sm animate-pulse">Aidan is analyzing your site...</p>
          </div>
        </div>
      {/if}
    </div>
    
    <!-- Suggested Questions -->
    {#if suggestedQuestions.length > 0}
      <div class="flex flex-wrap gap-2 mt-2">
        {#each suggestedQuestions as question}
          <button 
            onclick={() => { newMessage = question; sendMessage(); }}
            class="text-xs bg-slate-200 px-2 py-1 rounded-full hover:bg-blue-100 transition"
            disabled={isStreaming}
          >
            {question}
          </button>
        {/each}
      </div>
    {/if}
    
    <div class="flex gap-2">
      <Input
        type="text"
        placeholder="Ask Aidan about your website's performance..."
        bind:value={newMessage}
        on:keydown={handleKeyDown}
        disabled={isStreaming}
        class="flex-1"
      />
      <Button onClick={sendMessage} disabled={!newMessage.trim() || isStreaming}>
        Send
      </Button>
    </div>
  </CardContent>
</Card>
