import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMarkupRuleArgs, GetMarkupRuleResult, GetMarkupRuleOutputArgs } from "./getMarkupRule";
export const getMarkupRule: typeof import("./getMarkupRule").getMarkupRule = null as any;
export const getMarkupRuleOutput: typeof import("./getMarkupRule").getMarkupRuleOutput = null as any;
utilities.lazyLoad(exports, ["getMarkupRule","getMarkupRuleOutput"], () => require("./getMarkupRule"));

export { GetTagInheritanceSettingArgs, GetTagInheritanceSettingResult, GetTagInheritanceSettingOutputArgs } from "./getTagInheritanceSetting";
export const getTagInheritanceSetting: typeof import("./getTagInheritanceSetting").getTagInheritanceSetting = null as any;
export const getTagInheritanceSettingOutput: typeof import("./getTagInheritanceSetting").getTagInheritanceSettingOutput = null as any;
utilities.lazyLoad(exports, ["getTagInheritanceSetting","getTagInheritanceSettingOutput"], () => require("./getTagInheritanceSetting"));

export { GetViewArgs, GetViewResult, GetViewOutputArgs } from "./getView";
export const getView: typeof import("./getView").getView = null as any;
export const getViewOutput: typeof import("./getView").getViewOutput = null as any;
utilities.lazyLoad(exports, ["getView","getViewOutput"], () => require("./getView"));

export { GetViewByScopeArgs, GetViewByScopeResult, GetViewByScopeOutputArgs } from "./getViewByScope";
export const getViewByScope: typeof import("./getViewByScope").getViewByScope = null as any;
export const getViewByScopeOutput: typeof import("./getViewByScope").getViewByScopeOutput = null as any;
utilities.lazyLoad(exports, ["getViewByScope","getViewByScopeOutput"], () => require("./getViewByScope"));

export { MarkupRuleArgs } from "./markupRule";
export type MarkupRule = import("./markupRule").MarkupRule;
export const MarkupRule: typeof import("./markupRule").MarkupRule = null as any;
utilities.lazyLoad(exports, ["MarkupRule"], () => require("./markupRule"));

export { TagInheritanceSettingArgs } from "./tagInheritanceSetting";
export type TagInheritanceSetting = import("./tagInheritanceSetting").TagInheritanceSetting;
export const TagInheritanceSetting: typeof import("./tagInheritanceSetting").TagInheritanceSetting = null as any;
utilities.lazyLoad(exports, ["TagInheritanceSetting"], () => require("./tagInheritanceSetting"));

export { ViewArgs } from "./view";
export type View = import("./view").View;
export const View: typeof import("./view").View = null as any;
utilities.lazyLoad(exports, ["View"], () => require("./view"));

export { ViewByScopeArgs } from "./viewByScope";
export type ViewByScope = import("./viewByScope").ViewByScope;
export const ViewByScope: typeof import("./viewByScope").ViewByScope = null as any;
utilities.lazyLoad(exports, ["ViewByScope"], () => require("./viewByScope"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:costmanagement/v20221005preview:MarkupRule":
                return new MarkupRule(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20221005preview:TagInheritanceSetting":
                return new TagInheritanceSetting(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20221005preview:View":
                return new View(name, <any>undefined, { urn })
            case "azure-native:costmanagement/v20221005preview:ViewByScope":
                return new ViewByScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement/v20221005preview", _module)
