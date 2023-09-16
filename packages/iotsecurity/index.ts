import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DefenderSettingArgs } from "./defenderSetting";
export type DefenderSetting = import("./defenderSetting").DefenderSetting;
export const DefenderSetting: typeof import("./defenderSetting").DefenderSetting = null as any;
utilities.lazyLoad(exports, ["DefenderSetting"], () => require("./defenderSetting"));

export { DeviceGroupArgs } from "./deviceGroup";
export type DeviceGroup = import("./deviceGroup").DeviceGroup;
export const DeviceGroup: typeof import("./deviceGroup").DeviceGroup = null as any;
utilities.lazyLoad(exports, ["DeviceGroup"], () => require("./deviceGroup"));

export { GetDefenderSettingArgs, GetDefenderSettingResult } from "./getDefenderSetting";
export const getDefenderSetting: typeof import("./getDefenderSetting").getDefenderSetting = null as any;
export const getDefenderSettingOutput: typeof import("./getDefenderSetting").getDefenderSettingOutput = null as any;
utilities.lazyLoad(exports, ["getDefenderSetting","getDefenderSettingOutput"], () => require("./getDefenderSetting"));

export { GetDeviceGroupArgs, GetDeviceGroupResult, GetDeviceGroupOutputArgs } from "./getDeviceGroup";
export const getDeviceGroup: typeof import("./getDeviceGroup").getDeviceGroup = null as any;
export const getDeviceGroupOutput: typeof import("./getDeviceGroup").getDeviceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getDeviceGroup","getDeviceGroupOutput"], () => require("./getDeviceGroup"));

export { GetOnPremiseSensorArgs, GetOnPremiseSensorResult, GetOnPremiseSensorOutputArgs } from "./getOnPremiseSensor";
export const getOnPremiseSensor: typeof import("./getOnPremiseSensor").getOnPremiseSensor = null as any;
export const getOnPremiseSensorOutput: typeof import("./getOnPremiseSensor").getOnPremiseSensorOutput = null as any;
utilities.lazyLoad(exports, ["getOnPremiseSensor","getOnPremiseSensorOutput"], () => require("./getOnPremiseSensor"));

export { GetSensorArgs, GetSensorResult, GetSensorOutputArgs } from "./getSensor";
export const getSensor: typeof import("./getSensor").getSensor = null as any;
export const getSensorOutput: typeof import("./getSensor").getSensorOutput = null as any;
utilities.lazyLoad(exports, ["getSensor","getSensorOutput"], () => require("./getSensor"));

export { GetSiteArgs, GetSiteResult, GetSiteOutputArgs } from "./getSite";
export const getSite: typeof import("./getSite").getSite = null as any;
export const getSiteOutput: typeof import("./getSite").getSiteOutput = null as any;
utilities.lazyLoad(exports, ["getSite","getSiteOutput"], () => require("./getSite"));

export { OnPremiseSensorArgs } from "./onPremiseSensor";
export type OnPremiseSensor = import("./onPremiseSensor").OnPremiseSensor;
export const OnPremiseSensor: typeof import("./onPremiseSensor").OnPremiseSensor = null as any;
utilities.lazyLoad(exports, ["OnPremiseSensor"], () => require("./onPremiseSensor"));

export { SensorArgs } from "./sensor";
export type Sensor = import("./sensor").Sensor;
export const Sensor: typeof import("./sensor").Sensor = null as any;
utilities.lazyLoad(exports, ["Sensor"], () => require("./sensor"));

export { SiteArgs } from "./site";
export type Site = import("./site").Site;
export const Site: typeof import("./site").Site = null as any;
utilities.lazyLoad(exports, ["Site"], () => require("./site"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20210201preview from "./v20210201preview";

export {
    v20210201preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iotsecurity:DefenderSetting":
                return new DefenderSetting(name, <any>undefined, { urn })
            case "azure-native:iotsecurity:DeviceGroup":
                return new DeviceGroup(name, <any>undefined, { urn })
            case "azure-native:iotsecurity:OnPremiseSensor":
                return new OnPremiseSensor(name, <any>undefined, { urn })
            case "azure-native:iotsecurity:Sensor":
                return new Sensor(name, <any>undefined, { urn })
            case "azure-native:iotsecurity:Site":
                return new Site(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotsecurity", _module)
