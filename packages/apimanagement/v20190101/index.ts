import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiDiagnosticArgs } from "./apiDiagnostic";
export type ApiDiagnostic = import("./apiDiagnostic").ApiDiagnostic;
export const ApiDiagnostic: typeof import("./apiDiagnostic").ApiDiagnostic = null as any;
utilities.lazyLoad(exports, ["ApiDiagnostic"], () => require("./apiDiagnostic"));

export { ApiSchemaArgs } from "./apiSchema";
export type ApiSchema = import("./apiSchema").ApiSchema;
export const ApiSchema: typeof import("./apiSchema").ApiSchema = null as any;
utilities.lazyLoad(exports, ["ApiSchema"], () => require("./apiSchema"));

export { ApiTagDescriptionArgs } from "./apiTagDescription";
export type ApiTagDescription = import("./apiTagDescription").ApiTagDescription;
export const ApiTagDescription: typeof import("./apiTagDescription").ApiTagDescription = null as any;
utilities.lazyLoad(exports, ["ApiTagDescription"], () => require("./apiTagDescription"));

export { DiagnosticArgs } from "./diagnostic";
export type Diagnostic = import("./diagnostic").Diagnostic;
export const Diagnostic: typeof import("./diagnostic").Diagnostic = null as any;
utilities.lazyLoad(exports, ["Diagnostic"], () => require("./diagnostic"));

export { GetApiDiagnosticArgs, GetApiDiagnosticResult, GetApiDiagnosticOutputArgs } from "./getApiDiagnostic";
export const getApiDiagnostic: typeof import("./getApiDiagnostic").getApiDiagnostic = null as any;
export const getApiDiagnosticOutput: typeof import("./getApiDiagnostic").getApiDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getApiDiagnostic","getApiDiagnosticOutput"], () => require("./getApiDiagnostic"));

export { GetApiSchemaArgs, GetApiSchemaResult, GetApiSchemaOutputArgs } from "./getApiSchema";
export const getApiSchema: typeof import("./getApiSchema").getApiSchema = null as any;
export const getApiSchemaOutput: typeof import("./getApiSchema").getApiSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getApiSchema","getApiSchemaOutput"], () => require("./getApiSchema"));

export { GetApiTagDescriptionArgs, GetApiTagDescriptionResult, GetApiTagDescriptionOutputArgs } from "./getApiTagDescription";
export const getApiTagDescription: typeof import("./getApiTagDescription").getApiTagDescription = null as any;
export const getApiTagDescriptionOutput: typeof import("./getApiTagDescription").getApiTagDescriptionOutput = null as any;
utilities.lazyLoad(exports, ["getApiTagDescription","getApiTagDescriptionOutput"], () => require("./getApiTagDescription"));

export { GetDiagnosticArgs, GetDiagnosticResult, GetDiagnosticOutputArgs } from "./getDiagnostic";
export const getDiagnostic: typeof import("./getDiagnostic").getDiagnostic = null as any;
export const getDiagnosticOutput: typeof import("./getDiagnostic").getDiagnosticOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnostic","getDiagnosticOutput"], () => require("./getDiagnostic"));

export { GetIdentityProviderArgs, GetIdentityProviderResult, GetIdentityProviderOutputArgs } from "./getIdentityProvider";
export const getIdentityProvider: typeof import("./getIdentityProvider").getIdentityProvider = null as any;
export const getIdentityProviderOutput: typeof import("./getIdentityProvider").getIdentityProviderOutput = null as any;
utilities.lazyLoad(exports, ["getIdentityProvider","getIdentityProviderOutput"], () => require("./getIdentityProvider"));

export { GetPropertyArgs, GetPropertyResult, GetPropertyOutputArgs } from "./getProperty";
export const getProperty: typeof import("./getProperty").getProperty = null as any;
export const getPropertyOutput: typeof import("./getProperty").getPropertyOutput = null as any;
utilities.lazyLoad(exports, ["getProperty","getPropertyOutput"], () => require("./getProperty"));

export { GetSubscriptionArgs, GetSubscriptionResult, GetSubscriptionOutputArgs } from "./getSubscription";
export const getSubscription: typeof import("./getSubscription").getSubscription = null as any;
export const getSubscriptionOutput: typeof import("./getSubscription").getSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getSubscription","getSubscriptionOutput"], () => require("./getSubscription"));

export { IdentityProviderArgs } from "./identityProvider";
export type IdentityProvider = import("./identityProvider").IdentityProvider;
export const IdentityProvider: typeof import("./identityProvider").IdentityProvider = null as any;
utilities.lazyLoad(exports, ["IdentityProvider"], () => require("./identityProvider"));

export { PropertyArgs } from "./property";
export type Property = import("./property").Property;
export const Property: typeof import("./property").Property = null as any;
utilities.lazyLoad(exports, ["Property"], () => require("./property"));

export { SubscriptionArgs } from "./subscription";
export type Subscription = import("./subscription").Subscription;
export const Subscription: typeof import("./subscription").Subscription = null as any;
utilities.lazyLoad(exports, ["Subscription"], () => require("./subscription"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement/v20190101:ApiDiagnostic":
                return new ApiDiagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20190101:ApiSchema":
                return new ApiSchema(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20190101:ApiTagDescription":
                return new ApiTagDescription(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20190101:Diagnostic":
                return new Diagnostic(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20190101:IdentityProvider":
                return new IdentityProvider(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20190101:Property":
                return new Property(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20190101:Subscription":
                return new Subscription(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20190101", _module)