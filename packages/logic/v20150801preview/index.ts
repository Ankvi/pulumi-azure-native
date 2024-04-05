import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetIntegrationAccountArgs, GetIntegrationAccountResult, GetIntegrationAccountOutputArgs } from "./getIntegrationAccount";
export const getIntegrationAccount: typeof import("./getIntegrationAccount").getIntegrationAccount = null as any;
export const getIntegrationAccountOutput: typeof import("./getIntegrationAccount").getIntegrationAccountOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationAccount","getIntegrationAccountOutput"], () => require("./getIntegrationAccount"));

export { GetIntegrationAccountAgreementArgs, GetIntegrationAccountAgreementResult, GetIntegrationAccountAgreementOutputArgs } from "./getIntegrationAccountAgreement";
export const getIntegrationAccountAgreement: typeof import("./getIntegrationAccountAgreement").getIntegrationAccountAgreement = null as any;
export const getIntegrationAccountAgreementOutput: typeof import("./getIntegrationAccountAgreement").getIntegrationAccountAgreementOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationAccountAgreement","getIntegrationAccountAgreementOutput"], () => require("./getIntegrationAccountAgreement"));

export { GetIntegrationAccountCertificateArgs, GetIntegrationAccountCertificateResult, GetIntegrationAccountCertificateOutputArgs } from "./getIntegrationAccountCertificate";
export const getIntegrationAccountCertificate: typeof import("./getIntegrationAccountCertificate").getIntegrationAccountCertificate = null as any;
export const getIntegrationAccountCertificateOutput: typeof import("./getIntegrationAccountCertificate").getIntegrationAccountCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationAccountCertificate","getIntegrationAccountCertificateOutput"], () => require("./getIntegrationAccountCertificate"));

export { GetIntegrationAccountMapArgs, GetIntegrationAccountMapResult, GetIntegrationAccountMapOutputArgs } from "./getIntegrationAccountMap";
export const getIntegrationAccountMap: typeof import("./getIntegrationAccountMap").getIntegrationAccountMap = null as any;
export const getIntegrationAccountMapOutput: typeof import("./getIntegrationAccountMap").getIntegrationAccountMapOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationAccountMap","getIntegrationAccountMapOutput"], () => require("./getIntegrationAccountMap"));

export { GetIntegrationAccountPartnerArgs, GetIntegrationAccountPartnerResult, GetIntegrationAccountPartnerOutputArgs } from "./getIntegrationAccountPartner";
export const getIntegrationAccountPartner: typeof import("./getIntegrationAccountPartner").getIntegrationAccountPartner = null as any;
export const getIntegrationAccountPartnerOutput: typeof import("./getIntegrationAccountPartner").getIntegrationAccountPartnerOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationAccountPartner","getIntegrationAccountPartnerOutput"], () => require("./getIntegrationAccountPartner"));

export { GetIntegrationAccountSchemaArgs, GetIntegrationAccountSchemaResult, GetIntegrationAccountSchemaOutputArgs } from "./getIntegrationAccountSchema";
export const getIntegrationAccountSchema: typeof import("./getIntegrationAccountSchema").getIntegrationAccountSchema = null as any;
export const getIntegrationAccountSchemaOutput: typeof import("./getIntegrationAccountSchema").getIntegrationAccountSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getIntegrationAccountSchema","getIntegrationAccountSchemaOutput"], () => require("./getIntegrationAccountSchema"));

export { IntegrationAccountArgs } from "./integrationAccount";
export type IntegrationAccount = import("./integrationAccount").IntegrationAccount;
export const IntegrationAccount: typeof import("./integrationAccount").IntegrationAccount = null as any;
utilities.lazyLoad(exports, ["IntegrationAccount"], () => require("./integrationAccount"));

export { IntegrationAccountAgreementArgs } from "./integrationAccountAgreement";
export type IntegrationAccountAgreement = import("./integrationAccountAgreement").IntegrationAccountAgreement;
export const IntegrationAccountAgreement: typeof import("./integrationAccountAgreement").IntegrationAccountAgreement = null as any;
utilities.lazyLoad(exports, ["IntegrationAccountAgreement"], () => require("./integrationAccountAgreement"));

export { IntegrationAccountCertificateArgs } from "./integrationAccountCertificate";
export type IntegrationAccountCertificate = import("./integrationAccountCertificate").IntegrationAccountCertificate;
export const IntegrationAccountCertificate: typeof import("./integrationAccountCertificate").IntegrationAccountCertificate = null as any;
utilities.lazyLoad(exports, ["IntegrationAccountCertificate"], () => require("./integrationAccountCertificate"));

export { IntegrationAccountMapArgs } from "./integrationAccountMap";
export type IntegrationAccountMap = import("./integrationAccountMap").IntegrationAccountMap;
export const IntegrationAccountMap: typeof import("./integrationAccountMap").IntegrationAccountMap = null as any;
utilities.lazyLoad(exports, ["IntegrationAccountMap"], () => require("./integrationAccountMap"));

export { IntegrationAccountPartnerArgs } from "./integrationAccountPartner";
export type IntegrationAccountPartner = import("./integrationAccountPartner").IntegrationAccountPartner;
export const IntegrationAccountPartner: typeof import("./integrationAccountPartner").IntegrationAccountPartner = null as any;
utilities.lazyLoad(exports, ["IntegrationAccountPartner"], () => require("./integrationAccountPartner"));

export { IntegrationAccountSchemaArgs } from "./integrationAccountSchema";
export type IntegrationAccountSchema = import("./integrationAccountSchema").IntegrationAccountSchema;
export const IntegrationAccountSchema: typeof import("./integrationAccountSchema").IntegrationAccountSchema = null as any;
utilities.lazyLoad(exports, ["IntegrationAccountSchema"], () => require("./integrationAccountSchema"));

export { ListIntegrationAccountCallbackUrlArgs, ListIntegrationAccountCallbackUrlResult, ListIntegrationAccountCallbackUrlOutputArgs } from "./listIntegrationAccountCallbackUrl";
export const listIntegrationAccountCallbackUrl: typeof import("./listIntegrationAccountCallbackUrl").listIntegrationAccountCallbackUrl = null as any;
export const listIntegrationAccountCallbackUrlOutput: typeof import("./listIntegrationAccountCallbackUrl").listIntegrationAccountCallbackUrlOutput = null as any;
utilities.lazyLoad(exports, ["listIntegrationAccountCallbackUrl","listIntegrationAccountCallbackUrlOutput"], () => require("./listIntegrationAccountCallbackUrl"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:logic/v20150801preview:IntegrationAccount":
                return new IntegrationAccount(name, <any>undefined, { urn })
            case "azure-native:logic/v20150801preview:IntegrationAccountAgreement":
                return new IntegrationAccountAgreement(name, <any>undefined, { urn })
            case "azure-native:logic/v20150801preview:IntegrationAccountCertificate":
                return new IntegrationAccountCertificate(name, <any>undefined, { urn })
            case "azure-native:logic/v20150801preview:IntegrationAccountMap":
                return new IntegrationAccountMap(name, <any>undefined, { urn })
            case "azure-native:logic/v20150801preview:IntegrationAccountPartner":
                return new IntegrationAccountPartner(name, <any>undefined, { urn })
            case "azure-native:logic/v20150801preview:IntegrationAccountSchema":
                return new IntegrationAccountSchema(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "logic/v20150801preview", _module)