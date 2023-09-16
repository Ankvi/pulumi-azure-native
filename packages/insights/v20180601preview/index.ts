import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGuestDiagnosticsSettingArgs, GetGuestDiagnosticsSettingResult, GetGuestDiagnosticsSettingOutputArgs } from "./getGuestDiagnosticsSetting";
export const getGuestDiagnosticsSetting: typeof import("./getGuestDiagnosticsSetting").getGuestDiagnosticsSetting = null as any;
export const getGuestDiagnosticsSettingOutput: typeof import("./getGuestDiagnosticsSetting").getGuestDiagnosticsSettingOutput = null as any;
utilities.lazyLoad(exports, ["getGuestDiagnosticsSetting","getGuestDiagnosticsSettingOutput"], () => require("./getGuestDiagnosticsSetting"));

export { GetGuestDiagnosticsSettingsAssociationArgs, GetGuestDiagnosticsSettingsAssociationResult, GetGuestDiagnosticsSettingsAssociationOutputArgs } from "./getGuestDiagnosticsSettingsAssociation";
export const getGuestDiagnosticsSettingsAssociation: typeof import("./getGuestDiagnosticsSettingsAssociation").getGuestDiagnosticsSettingsAssociation = null as any;
export const getGuestDiagnosticsSettingsAssociationOutput: typeof import("./getGuestDiagnosticsSettingsAssociation").getGuestDiagnosticsSettingsAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getGuestDiagnosticsSettingsAssociation","getGuestDiagnosticsSettingsAssociationOutput"], () => require("./getGuestDiagnosticsSettingsAssociation"));

export { GuestDiagnosticsSettingArgs } from "./guestDiagnosticsSetting";
export type GuestDiagnosticsSetting = import("./guestDiagnosticsSetting").GuestDiagnosticsSetting;
export const GuestDiagnosticsSetting: typeof import("./guestDiagnosticsSetting").GuestDiagnosticsSetting = null as any;
utilities.lazyLoad(exports, ["GuestDiagnosticsSetting"], () => require("./guestDiagnosticsSetting"));

export { GuestDiagnosticsSettingsAssociationArgs } from "./guestDiagnosticsSettingsAssociation";
export type GuestDiagnosticsSettingsAssociation = import("./guestDiagnosticsSettingsAssociation").GuestDiagnosticsSettingsAssociation;
export const GuestDiagnosticsSettingsAssociation: typeof import("./guestDiagnosticsSettingsAssociation").GuestDiagnosticsSettingsAssociation = null as any;
utilities.lazyLoad(exports, ["GuestDiagnosticsSettingsAssociation"], () => require("./guestDiagnosticsSettingsAssociation"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20180601preview:GuestDiagnosticsSetting":
                return new GuestDiagnosticsSetting(name, <any>undefined, { urn })
            case "azure-native:insights/v20180601preview:GuestDiagnosticsSettingsAssociation":
                return new GuestDiagnosticsSettingsAssociation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20180601preview", _module)
