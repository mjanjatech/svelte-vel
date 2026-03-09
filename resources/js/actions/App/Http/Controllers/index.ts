import GuestCritiqueController from './GuestCritiqueController'
import GuestBlueprintController from './GuestBlueprintController'
import AuditController from './AuditController'
import CritiqueController from './CritiqueController'
import ToolsController from './ToolsController'
import Settings from './Settings'
const Controllers = {
    GuestCritiqueController: Object.assign(GuestCritiqueController, GuestCritiqueController),
GuestBlueprintController: Object.assign(GuestBlueprintController, GuestBlueprintController),
AuditController: Object.assign(AuditController, AuditController),
CritiqueController: Object.assign(CritiqueController, CritiqueController),
ToolsController: Object.assign(ToolsController, ToolsController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers