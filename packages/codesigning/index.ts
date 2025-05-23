import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CertificateProfileArgs } from "./certificateProfile";
export type CertificateProfile = import("./certificateProfile").CertificateProfile;
export const CertificateProfile: typeof import("./certificateProfile").CertificateProfile = null as any;
utilities.lazyLoad(exports, ["CertificateProfile"], () => require("./certificateProfile"));

export { CodeSigningAccountArgs } from "./codeSigningAccount";
export type CodeSigningAccount = import("./codeSigningAccount").CodeSigningAccount;
export const CodeSigningAccount: typeof import("./codeSigningAccount").CodeSigningAccount = null as any;
utilities.lazyLoad(exports, ["CodeSigningAccount"], () => require("./codeSigningAccount"));

export { GetCertificateProfileArgs, GetCertificateProfileResult, GetCertificateProfileOutputArgs } from "./getCertificateProfile";
export const getCertificateProfile: typeof import("./getCertificateProfile").getCertificateProfile = null as any;
export const getCertificateProfileOutput: typeof import("./getCertificateProfile").getCertificateProfileOutput = null as any;
utilities.lazyLoad(exports, ["getCertificateProfile","getCertificateProfileOutput"], () => require("./getCertificateProfile"));

export { GetCodeSigningAccountArgs, GetCodeSigningAccountResult, GetCodeSigningAccountOutputArgs } from "./getCodeSigningAccount";
export const getCodeSigningAccount: typeof import("./getCodeSigningAccount").getCodeSigningAccount = null as any;
export const getCodeSigningAccountOutput: typeof import("./getCodeSigningAccount").getCodeSigningAccountOutput = null as any;
utilities.lazyLoad(exports, ["getCodeSigningAccount","getCodeSigningAccountOutput"], () => require("./getCodeSigningAccount"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:codesigning:CertificateProfile":
                return new CertificateProfile(name, <any>undefined, { urn })
            case "azure-native:codesigning:CodeSigningAccount":
                return new CodeSigningAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "codesigning", _module)