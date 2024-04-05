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

export { GetSuppressionListArgs, GetSuppressionListResult, GetSuppressionListOutputArgs } from "./getSuppressionList";
export const getSuppressionList: typeof import("./getSuppressionList").getSuppressionList = null as any;
export const getSuppressionListOutput: typeof import("./getSuppressionList").getSuppressionListOutput = null as any;
utilities.lazyLoad(exports, ["getSuppressionList","getSuppressionListOutput"], () => require("./getSuppressionList"));

export { GetSuppressionListAddressArgs, GetSuppressionListAddressResult, GetSuppressionListAddressOutputArgs } from "./getSuppressionListAddress";
export const getSuppressionListAddress: typeof import("./getSuppressionListAddress").getSuppressionListAddress = null as any;
export const getSuppressionListAddressOutput: typeof import("./getSuppressionListAddress").getSuppressionListAddressOutput = null as any;
utilities.lazyLoad(exports, ["getSuppressionListAddress","getSuppressionListAddressOutput"], () => require("./getSuppressionListAddress"));

export { ListCommunicationServiceKeysArgs, ListCommunicationServiceKeysResult, ListCommunicationServiceKeysOutputArgs } from "./listCommunicationServiceKeys";
export const listCommunicationServiceKeys: typeof import("./listCommunicationServiceKeys").listCommunicationServiceKeys = null as any;
export const listCommunicationServiceKeysOutput: typeof import("./listCommunicationServiceKeys").listCommunicationServiceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listCommunicationServiceKeys","listCommunicationServiceKeysOutput"], () => require("./listCommunicationServiceKeys"));

export { SenderUsernameArgs } from "./senderUsername";
export type SenderUsername = import("./senderUsername").SenderUsername;
export const SenderUsername: typeof import("./senderUsername").SenderUsername = null as any;
utilities.lazyLoad(exports, ["SenderUsername"], () => require("./senderUsername"));

export { SuppressionListArgs } from "./suppressionList";
export type SuppressionList = import("./suppressionList").SuppressionList;
export const SuppressionList: typeof import("./suppressionList").SuppressionList = null as any;
utilities.lazyLoad(exports, ["SuppressionList"], () => require("./suppressionList"));

export { SuppressionListAddressArgs } from "./suppressionListAddress";
export type SuppressionListAddress = import("./suppressionListAddress").SuppressionListAddress;
export const SuppressionListAddress: typeof import("./suppressionListAddress").SuppressionListAddress = null as any;
utilities.lazyLoad(exports, ["SuppressionListAddress"], () => require("./suppressionListAddress"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20220701preview from "./v20220701preview";
import * as v20230331 from "./v20230331";
import * as v20230401 from "./v20230401";
import * as v20230401preview from "./v20230401preview";
import * as v20230601preview from "./v20230601preview";

export {
    v20220701preview,
    v20230331,
    v20230401,
    v20230401preview,
    v20230601preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:communication:CommunicationService":
                return new CommunicationService(name, <any>undefined, { urn })
            case "azure-native:communication:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "azure-native:communication:EmailService":
                return new EmailService(name, <any>undefined, { urn })
            case "azure-native:communication:SenderUsername":
                return new SenderUsername(name, <any>undefined, { urn })
            case "azure-native:communication:SuppressionList":
                return new SuppressionList(name, <any>undefined, { urn })
            case "azure-native:communication:SuppressionListAddress":
                return new SuppressionListAddress(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "communication", _module)