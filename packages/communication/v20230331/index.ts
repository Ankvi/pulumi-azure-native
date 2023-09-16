import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CommunicationServiceArgs } from "./communicationService";
export type CommunicationService = import("./communicationService").CommunicationService;
export const CommunicationService: typeof import("./communicationService").CommunicationService = null as any;
utilities.lazyLoad(exports, ["CommunicationService"], () => require("./communicationService"));

export { DomainArgs } from "./domain";
export type Domain = import("./domain").Domain;
export const Domain: typeof import("./domain").Domain = null as any;
utilities.lazyLoad(exports, ["Domain"], () => require("./domain"));

export { EmailServiceArgs } from "./emailService";
export type EmailService = import("./emailService").EmailService;
export const EmailService: typeof import("./emailService").EmailService = null as any;
utilities.lazyLoad(exports, ["EmailService"], () => require("./emailService"));

export { GetCommunicationServiceArgs, GetCommunicationServiceResult, GetCommunicationServiceOutputArgs } from "./getCommunicationService";
export const getCommunicationService: typeof import("./getCommunicationService").getCommunicationService = null as any;
export const getCommunicationServiceOutput: typeof import("./getCommunicationService").getCommunicationServiceOutput = null as any;
utilities.lazyLoad(exports, ["getCommunicationService","getCommunicationServiceOutput"], () => require("./getCommunicationService"));

export { GetDomainArgs, GetDomainResult, GetDomainOutputArgs } from "./getDomain";
export const getDomain: typeof import("./getDomain").getDomain = null as any;
export const getDomainOutput: typeof import("./getDomain").getDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDomain","getDomainOutput"], () => require("./getDomain"));

export { GetEmailServiceArgs, GetEmailServiceResult, GetEmailServiceOutputArgs } from "./getEmailService";
export const getEmailService: typeof import("./getEmailService").getEmailService = null as any;
export const getEmailServiceOutput: typeof import("./getEmailService").getEmailServiceOutput = null as any;
utilities.lazyLoad(exports, ["getEmailService","getEmailServiceOutput"], () => require("./getEmailService"));

export { GetSenderUsernameArgs, GetSenderUsernameResult, GetSenderUsernameOutputArgs } from "./getSenderUsername";
export const getSenderUsername: typeof import("./getSenderUsername").getSenderUsername = null as any;
export const getSenderUsernameOutput: typeof import("./getSenderUsername").getSenderUsernameOutput = null as any;
utilities.lazyLoad(exports, ["getSenderUsername","getSenderUsernameOutput"], () => require("./getSenderUsername"));

export { ListCommunicationServiceKeysArgs, ListCommunicationServiceKeysResult, ListCommunicationServiceKeysOutputArgs } from "./listCommunicationServiceKeys";
export const listCommunicationServiceKeys: typeof import("./listCommunicationServiceKeys").listCommunicationServiceKeys = null as any;
export const listCommunicationServiceKeysOutput: typeof import("./listCommunicationServiceKeys").listCommunicationServiceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listCommunicationServiceKeys","listCommunicationServiceKeysOutput"], () => require("./listCommunicationServiceKeys"));

export { SenderUsernameArgs } from "./senderUsername";
export type SenderUsername = import("./senderUsername").SenderUsername;
export const SenderUsername: typeof import("./senderUsername").SenderUsername = null as any;
utilities.lazyLoad(exports, ["SenderUsername"], () => require("./senderUsername"));


// Export enums:
export * from "../types/enums/v20230331";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:communication/v20230331:CommunicationService":
                return new CommunicationService(name, <any>undefined, { urn })
            case "azure-native:communication/v20230331:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "azure-native:communication/v20230331:EmailService":
                return new EmailService(name, <any>undefined, { urn })
            case "azure-native:communication/v20230331:SenderUsername":
                return new SenderUsername(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "communication/v20230331", _module)
