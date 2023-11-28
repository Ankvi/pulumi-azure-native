import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CaCertificateArgs } from "./caCertificate";
export type CaCertificate = import("./caCertificate").CaCertificate;
export const CaCertificate: typeof import("./caCertificate").CaCertificate = null as any;
utilities.lazyLoad(exports, ["CaCertificate"], () => require("./caCertificate"));

export { ChannelArgs } from "./channel";
export type Channel = import("./channel").Channel;
export const Channel: typeof import("./channel").Channel = null as any;
utilities.lazyLoad(exports, ["Channel"], () => require("./channel"));

export { ClientArgs } from "./client";
export type Client = import("./client").Client;
export const Client: typeof import("./client").Client = null as any;
utilities.lazyLoad(exports, ["Client"], () => require("./client"));

export { ClientGroupArgs } from "./clientGroup";
export type ClientGroup = import("./clientGroup").ClientGroup;
export const ClientGroup: typeof import("./clientGroup").ClientGroup = null as any;
utilities.lazyLoad(exports, ["ClientGroup"], () => require("./clientGroup"));

export { DomainArgs } from "./domain";
export type Domain = import("./domain").Domain;
export const Domain: typeof import("./domain").Domain = null as any;
utilities.lazyLoad(exports, ["Domain"], () => require("./domain"));

export { DomainEventSubscriptionArgs } from "./domainEventSubscription";
export type DomainEventSubscription = import("./domainEventSubscription").DomainEventSubscription;
export const DomainEventSubscription: typeof import("./domainEventSubscription").DomainEventSubscription = null as any;
utilities.lazyLoad(exports, ["DomainEventSubscription"], () => require("./domainEventSubscription"));

export { DomainTopicArgs } from "./domainTopic";
export type DomainTopic = import("./domainTopic").DomainTopic;
export const DomainTopic: typeof import("./domainTopic").DomainTopic = null as any;
utilities.lazyLoad(exports, ["DomainTopic"], () => require("./domainTopic"));

export { DomainTopicEventSubscriptionArgs } from "./domainTopicEventSubscription";
export type DomainTopicEventSubscription = import("./domainTopicEventSubscription").DomainTopicEventSubscription;
export const DomainTopicEventSubscription: typeof import("./domainTopicEventSubscription").DomainTopicEventSubscription = null as any;
utilities.lazyLoad(exports, ["DomainTopicEventSubscription"], () => require("./domainTopicEventSubscription"));

export { EventSubscriptionArgs } from "./eventSubscription";
export type EventSubscription = import("./eventSubscription").EventSubscription;
export const EventSubscription: typeof import("./eventSubscription").EventSubscription = null as any;
utilities.lazyLoad(exports, ["EventSubscription"], () => require("./eventSubscription"));

export { GetCaCertificateArgs, GetCaCertificateResult, GetCaCertificateOutputArgs } from "./getCaCertificate";
export const getCaCertificate: typeof import("./getCaCertificate").getCaCertificate = null as any;
export const getCaCertificateOutput: typeof import("./getCaCertificate").getCaCertificateOutput = null as any;
utilities.lazyLoad(exports, ["getCaCertificate","getCaCertificateOutput"], () => require("./getCaCertificate"));

export { GetChannelArgs, GetChannelResult, GetChannelOutputArgs } from "./getChannel";
export const getChannel: typeof import("./getChannel").getChannel = null as any;
export const getChannelOutput: typeof import("./getChannel").getChannelOutput = null as any;
utilities.lazyLoad(exports, ["getChannel","getChannelOutput"], () => require("./getChannel"));

export { GetChannelFullUrlArgs, GetChannelFullUrlResult, GetChannelFullUrlOutputArgs } from "./getChannelFullUrl";
export const getChannelFullUrl: typeof import("./getChannelFullUrl").getChannelFullUrl = null as any;
export const getChannelFullUrlOutput: typeof import("./getChannelFullUrl").getChannelFullUrlOutput = null as any;
utilities.lazyLoad(exports, ["getChannelFullUrl","getChannelFullUrlOutput"], () => require("./getChannelFullUrl"));

export { GetClientArgs, GetClientResult, GetClientOutputArgs } from "./getClient";
export const getClient: typeof import("./getClient").getClient = null as any;
export const getClientOutput: typeof import("./getClient").getClientOutput = null as any;
utilities.lazyLoad(exports, ["getClient","getClientOutput"], () => require("./getClient"));

export { GetClientGroupArgs, GetClientGroupResult, GetClientGroupOutputArgs } from "./getClientGroup";
export const getClientGroup: typeof import("./getClientGroup").getClientGroup = null as any;
export const getClientGroupOutput: typeof import("./getClientGroup").getClientGroupOutput = null as any;
utilities.lazyLoad(exports, ["getClientGroup","getClientGroupOutput"], () => require("./getClientGroup"));

export { GetDomainArgs, GetDomainResult, GetDomainOutputArgs } from "./getDomain";
export const getDomain: typeof import("./getDomain").getDomain = null as any;
export const getDomainOutput: typeof import("./getDomain").getDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDomain","getDomainOutput"], () => require("./getDomain"));

export { GetDomainEventSubscriptionArgs, GetDomainEventSubscriptionResult, GetDomainEventSubscriptionOutputArgs } from "./getDomainEventSubscription";
export const getDomainEventSubscription: typeof import("./getDomainEventSubscription").getDomainEventSubscription = null as any;
export const getDomainEventSubscriptionOutput: typeof import("./getDomainEventSubscription").getDomainEventSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getDomainEventSubscription","getDomainEventSubscriptionOutput"], () => require("./getDomainEventSubscription"));

export { GetDomainEventSubscriptionDeliveryAttributesArgs, GetDomainEventSubscriptionDeliveryAttributesResult, GetDomainEventSubscriptionDeliveryAttributesOutputArgs } from "./getDomainEventSubscriptionDeliveryAttributes";
export const getDomainEventSubscriptionDeliveryAttributes: typeof import("./getDomainEventSubscriptionDeliveryAttributes").getDomainEventSubscriptionDeliveryAttributes = null as any;
export const getDomainEventSubscriptionDeliveryAttributesOutput: typeof import("./getDomainEventSubscriptionDeliveryAttributes").getDomainEventSubscriptionDeliveryAttributesOutput = null as any;
utilities.lazyLoad(exports, ["getDomainEventSubscriptionDeliveryAttributes","getDomainEventSubscriptionDeliveryAttributesOutput"], () => require("./getDomainEventSubscriptionDeliveryAttributes"));

export { GetDomainEventSubscriptionFullUrlArgs, GetDomainEventSubscriptionFullUrlResult, GetDomainEventSubscriptionFullUrlOutputArgs } from "./getDomainEventSubscriptionFullUrl";
export const getDomainEventSubscriptionFullUrl: typeof import("./getDomainEventSubscriptionFullUrl").getDomainEventSubscriptionFullUrl = null as any;
export const getDomainEventSubscriptionFullUrlOutput: typeof import("./getDomainEventSubscriptionFullUrl").getDomainEventSubscriptionFullUrlOutput = null as any;
utilities.lazyLoad(exports, ["getDomainEventSubscriptionFullUrl","getDomainEventSubscriptionFullUrlOutput"], () => require("./getDomainEventSubscriptionFullUrl"));

export { GetDomainTopicArgs, GetDomainTopicResult, GetDomainTopicOutputArgs } from "./getDomainTopic";
export const getDomainTopic: typeof import("./getDomainTopic").getDomainTopic = null as any;
export const getDomainTopicOutput: typeof import("./getDomainTopic").getDomainTopicOutput = null as any;
utilities.lazyLoad(exports, ["getDomainTopic","getDomainTopicOutput"], () => require("./getDomainTopic"));

export { GetDomainTopicEventSubscriptionArgs, GetDomainTopicEventSubscriptionResult, GetDomainTopicEventSubscriptionOutputArgs } from "./getDomainTopicEventSubscription";
export const getDomainTopicEventSubscription: typeof import("./getDomainTopicEventSubscription").getDomainTopicEventSubscription = null as any;
export const getDomainTopicEventSubscriptionOutput: typeof import("./getDomainTopicEventSubscription").getDomainTopicEventSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getDomainTopicEventSubscription","getDomainTopicEventSubscriptionOutput"], () => require("./getDomainTopicEventSubscription"));

export { GetDomainTopicEventSubscriptionDeliveryAttributesArgs, GetDomainTopicEventSubscriptionDeliveryAttributesResult, GetDomainTopicEventSubscriptionDeliveryAttributesOutputArgs } from "./getDomainTopicEventSubscriptionDeliveryAttributes";
export const getDomainTopicEventSubscriptionDeliveryAttributes: typeof import("./getDomainTopicEventSubscriptionDeliveryAttributes").getDomainTopicEventSubscriptionDeliveryAttributes = null as any;
export const getDomainTopicEventSubscriptionDeliveryAttributesOutput: typeof import("./getDomainTopicEventSubscriptionDeliveryAttributes").getDomainTopicEventSubscriptionDeliveryAttributesOutput = null as any;
utilities.lazyLoad(exports, ["getDomainTopicEventSubscriptionDeliveryAttributes","getDomainTopicEventSubscriptionDeliveryAttributesOutput"], () => require("./getDomainTopicEventSubscriptionDeliveryAttributes"));

export { GetDomainTopicEventSubscriptionFullUrlArgs, GetDomainTopicEventSubscriptionFullUrlResult, GetDomainTopicEventSubscriptionFullUrlOutputArgs } from "./getDomainTopicEventSubscriptionFullUrl";
export const getDomainTopicEventSubscriptionFullUrl: typeof import("./getDomainTopicEventSubscriptionFullUrl").getDomainTopicEventSubscriptionFullUrl = null as any;
export const getDomainTopicEventSubscriptionFullUrlOutput: typeof import("./getDomainTopicEventSubscriptionFullUrl").getDomainTopicEventSubscriptionFullUrlOutput = null as any;
utilities.lazyLoad(exports, ["getDomainTopicEventSubscriptionFullUrl","getDomainTopicEventSubscriptionFullUrlOutput"], () => require("./getDomainTopicEventSubscriptionFullUrl"));

export { GetEventSubscriptionArgs, GetEventSubscriptionResult, GetEventSubscriptionOutputArgs } from "./getEventSubscription";
export const getEventSubscription: typeof import("./getEventSubscription").getEventSubscription = null as any;
export const getEventSubscriptionOutput: typeof import("./getEventSubscription").getEventSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getEventSubscription","getEventSubscriptionOutput"], () => require("./getEventSubscription"));

export { GetEventSubscriptionDeliveryAttributesArgs, GetEventSubscriptionDeliveryAttributesResult, GetEventSubscriptionDeliveryAttributesOutputArgs } from "./getEventSubscriptionDeliveryAttributes";
export const getEventSubscriptionDeliveryAttributes: typeof import("./getEventSubscriptionDeliveryAttributes").getEventSubscriptionDeliveryAttributes = null as any;
export const getEventSubscriptionDeliveryAttributesOutput: typeof import("./getEventSubscriptionDeliveryAttributes").getEventSubscriptionDeliveryAttributesOutput = null as any;
utilities.lazyLoad(exports, ["getEventSubscriptionDeliveryAttributes","getEventSubscriptionDeliveryAttributesOutput"], () => require("./getEventSubscriptionDeliveryAttributes"));

export { GetEventSubscriptionFullUrlArgs, GetEventSubscriptionFullUrlResult, GetEventSubscriptionFullUrlOutputArgs } from "./getEventSubscriptionFullUrl";
export const getEventSubscriptionFullUrl: typeof import("./getEventSubscriptionFullUrl").getEventSubscriptionFullUrl = null as any;
export const getEventSubscriptionFullUrlOutput: typeof import("./getEventSubscriptionFullUrl").getEventSubscriptionFullUrlOutput = null as any;
utilities.lazyLoad(exports, ["getEventSubscriptionFullUrl","getEventSubscriptionFullUrlOutput"], () => require("./getEventSubscriptionFullUrl"));

export { GetNamespaceArgs, GetNamespaceResult, GetNamespaceOutputArgs } from "./getNamespace";
export const getNamespace: typeof import("./getNamespace").getNamespace = null as any;
export const getNamespaceOutput: typeof import("./getNamespace").getNamespaceOutput = null as any;
utilities.lazyLoad(exports, ["getNamespace","getNamespaceOutput"], () => require("./getNamespace"));

export { GetNamespaceTopicArgs, GetNamespaceTopicResult, GetNamespaceTopicOutputArgs } from "./getNamespaceTopic";
export const getNamespaceTopic: typeof import("./getNamespaceTopic").getNamespaceTopic = null as any;
export const getNamespaceTopicOutput: typeof import("./getNamespaceTopic").getNamespaceTopicOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceTopic","getNamespaceTopicOutput"], () => require("./getNamespaceTopic"));

export { GetNamespaceTopicEventSubscriptionArgs, GetNamespaceTopicEventSubscriptionResult, GetNamespaceTopicEventSubscriptionOutputArgs } from "./getNamespaceTopicEventSubscription";
export const getNamespaceTopicEventSubscription: typeof import("./getNamespaceTopicEventSubscription").getNamespaceTopicEventSubscription = null as any;
export const getNamespaceTopicEventSubscriptionOutput: typeof import("./getNamespaceTopicEventSubscription").getNamespaceTopicEventSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceTopicEventSubscription","getNamespaceTopicEventSubscriptionOutput"], () => require("./getNamespaceTopicEventSubscription"));

export { GetNamespaceTopicEventSubscriptionDeliveryAttributesArgs, GetNamespaceTopicEventSubscriptionDeliveryAttributesResult, GetNamespaceTopicEventSubscriptionDeliveryAttributesOutputArgs } from "./getNamespaceTopicEventSubscriptionDeliveryAttributes";
export const getNamespaceTopicEventSubscriptionDeliveryAttributes: typeof import("./getNamespaceTopicEventSubscriptionDeliveryAttributes").getNamespaceTopicEventSubscriptionDeliveryAttributes = null as any;
export const getNamespaceTopicEventSubscriptionDeliveryAttributesOutput: typeof import("./getNamespaceTopicEventSubscriptionDeliveryAttributes").getNamespaceTopicEventSubscriptionDeliveryAttributesOutput = null as any;
utilities.lazyLoad(exports, ["getNamespaceTopicEventSubscriptionDeliveryAttributes","getNamespaceTopicEventSubscriptionDeliveryAttributesOutput"], () => require("./getNamespaceTopicEventSubscriptionDeliveryAttributes"));

export { GetPartnerConfigurationArgs, GetPartnerConfigurationResult, GetPartnerConfigurationOutputArgs } from "./getPartnerConfiguration";
export const getPartnerConfiguration: typeof import("./getPartnerConfiguration").getPartnerConfiguration = null as any;
export const getPartnerConfigurationOutput: typeof import("./getPartnerConfiguration").getPartnerConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerConfiguration","getPartnerConfigurationOutput"], () => require("./getPartnerConfiguration"));

export { GetPartnerDestinationArgs, GetPartnerDestinationResult, GetPartnerDestinationOutputArgs } from "./getPartnerDestination";
export const getPartnerDestination: typeof import("./getPartnerDestination").getPartnerDestination = null as any;
export const getPartnerDestinationOutput: typeof import("./getPartnerDestination").getPartnerDestinationOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerDestination","getPartnerDestinationOutput"], () => require("./getPartnerDestination"));

export { GetPartnerNamespaceArgs, GetPartnerNamespaceResult, GetPartnerNamespaceOutputArgs } from "./getPartnerNamespace";
export const getPartnerNamespace: typeof import("./getPartnerNamespace").getPartnerNamespace = null as any;
export const getPartnerNamespaceOutput: typeof import("./getPartnerNamespace").getPartnerNamespaceOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerNamespace","getPartnerNamespaceOutput"], () => require("./getPartnerNamespace"));

export { GetPartnerRegistrationArgs, GetPartnerRegistrationResult, GetPartnerRegistrationOutputArgs } from "./getPartnerRegistration";
export const getPartnerRegistration: typeof import("./getPartnerRegistration").getPartnerRegistration = null as any;
export const getPartnerRegistrationOutput: typeof import("./getPartnerRegistration").getPartnerRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerRegistration","getPartnerRegistrationOutput"], () => require("./getPartnerRegistration"));

export { GetPartnerTopicArgs, GetPartnerTopicResult, GetPartnerTopicOutputArgs } from "./getPartnerTopic";
export const getPartnerTopic: typeof import("./getPartnerTopic").getPartnerTopic = null as any;
export const getPartnerTopicOutput: typeof import("./getPartnerTopic").getPartnerTopicOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerTopic","getPartnerTopicOutput"], () => require("./getPartnerTopic"));

export { GetPartnerTopicEventSubscriptionArgs, GetPartnerTopicEventSubscriptionResult, GetPartnerTopicEventSubscriptionOutputArgs } from "./getPartnerTopicEventSubscription";
export const getPartnerTopicEventSubscription: typeof import("./getPartnerTopicEventSubscription").getPartnerTopicEventSubscription = null as any;
export const getPartnerTopicEventSubscriptionOutput: typeof import("./getPartnerTopicEventSubscription").getPartnerTopicEventSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerTopicEventSubscription","getPartnerTopicEventSubscriptionOutput"], () => require("./getPartnerTopicEventSubscription"));

export { GetPartnerTopicEventSubscriptionDeliveryAttributesArgs, GetPartnerTopicEventSubscriptionDeliveryAttributesResult, GetPartnerTopicEventSubscriptionDeliveryAttributesOutputArgs } from "./getPartnerTopicEventSubscriptionDeliveryAttributes";
export const getPartnerTopicEventSubscriptionDeliveryAttributes: typeof import("./getPartnerTopicEventSubscriptionDeliveryAttributes").getPartnerTopicEventSubscriptionDeliveryAttributes = null as any;
export const getPartnerTopicEventSubscriptionDeliveryAttributesOutput: typeof import("./getPartnerTopicEventSubscriptionDeliveryAttributes").getPartnerTopicEventSubscriptionDeliveryAttributesOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerTopicEventSubscriptionDeliveryAttributes","getPartnerTopicEventSubscriptionDeliveryAttributesOutput"], () => require("./getPartnerTopicEventSubscriptionDeliveryAttributes"));

export { GetPartnerTopicEventSubscriptionFullUrlArgs, GetPartnerTopicEventSubscriptionFullUrlResult, GetPartnerTopicEventSubscriptionFullUrlOutputArgs } from "./getPartnerTopicEventSubscriptionFullUrl";
export const getPartnerTopicEventSubscriptionFullUrl: typeof import("./getPartnerTopicEventSubscriptionFullUrl").getPartnerTopicEventSubscriptionFullUrl = null as any;
export const getPartnerTopicEventSubscriptionFullUrlOutput: typeof import("./getPartnerTopicEventSubscriptionFullUrl").getPartnerTopicEventSubscriptionFullUrlOutput = null as any;
utilities.lazyLoad(exports, ["getPartnerTopicEventSubscriptionFullUrl","getPartnerTopicEventSubscriptionFullUrlOutput"], () => require("./getPartnerTopicEventSubscriptionFullUrl"));

export { GetPermissionBindingArgs, GetPermissionBindingResult, GetPermissionBindingOutputArgs } from "./getPermissionBinding";
export const getPermissionBinding: typeof import("./getPermissionBinding").getPermissionBinding = null as any;
export const getPermissionBindingOutput: typeof import("./getPermissionBinding").getPermissionBindingOutput = null as any;
utilities.lazyLoad(exports, ["getPermissionBinding","getPermissionBindingOutput"], () => require("./getPermissionBinding"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetSystemTopicArgs, GetSystemTopicResult, GetSystemTopicOutputArgs } from "./getSystemTopic";
export const getSystemTopic: typeof import("./getSystemTopic").getSystemTopic = null as any;
export const getSystemTopicOutput: typeof import("./getSystemTopic").getSystemTopicOutput = null as any;
utilities.lazyLoad(exports, ["getSystemTopic","getSystemTopicOutput"], () => require("./getSystemTopic"));

export { GetSystemTopicEventSubscriptionArgs, GetSystemTopicEventSubscriptionResult, GetSystemTopicEventSubscriptionOutputArgs } from "./getSystemTopicEventSubscription";
export const getSystemTopicEventSubscription: typeof import("./getSystemTopicEventSubscription").getSystemTopicEventSubscription = null as any;
export const getSystemTopicEventSubscriptionOutput: typeof import("./getSystemTopicEventSubscription").getSystemTopicEventSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getSystemTopicEventSubscription","getSystemTopicEventSubscriptionOutput"], () => require("./getSystemTopicEventSubscription"));

export { GetSystemTopicEventSubscriptionDeliveryAttributesArgs, GetSystemTopicEventSubscriptionDeliveryAttributesResult, GetSystemTopicEventSubscriptionDeliveryAttributesOutputArgs } from "./getSystemTopicEventSubscriptionDeliveryAttributes";
export const getSystemTopicEventSubscriptionDeliveryAttributes: typeof import("./getSystemTopicEventSubscriptionDeliveryAttributes").getSystemTopicEventSubscriptionDeliveryAttributes = null as any;
export const getSystemTopicEventSubscriptionDeliveryAttributesOutput: typeof import("./getSystemTopicEventSubscriptionDeliveryAttributes").getSystemTopicEventSubscriptionDeliveryAttributesOutput = null as any;
utilities.lazyLoad(exports, ["getSystemTopicEventSubscriptionDeliveryAttributes","getSystemTopicEventSubscriptionDeliveryAttributesOutput"], () => require("./getSystemTopicEventSubscriptionDeliveryAttributes"));

export { GetSystemTopicEventSubscriptionFullUrlArgs, GetSystemTopicEventSubscriptionFullUrlResult, GetSystemTopicEventSubscriptionFullUrlOutputArgs } from "./getSystemTopicEventSubscriptionFullUrl";
export const getSystemTopicEventSubscriptionFullUrl: typeof import("./getSystemTopicEventSubscriptionFullUrl").getSystemTopicEventSubscriptionFullUrl = null as any;
export const getSystemTopicEventSubscriptionFullUrlOutput: typeof import("./getSystemTopicEventSubscriptionFullUrl").getSystemTopicEventSubscriptionFullUrlOutput = null as any;
utilities.lazyLoad(exports, ["getSystemTopicEventSubscriptionFullUrl","getSystemTopicEventSubscriptionFullUrlOutput"], () => require("./getSystemTopicEventSubscriptionFullUrl"));

export { GetTopicArgs, GetTopicResult, GetTopicOutputArgs } from "./getTopic";
export const getTopic: typeof import("./getTopic").getTopic = null as any;
export const getTopicOutput: typeof import("./getTopic").getTopicOutput = null as any;
utilities.lazyLoad(exports, ["getTopic","getTopicOutput"], () => require("./getTopic"));

export { GetTopicEventSubscriptionArgs, GetTopicEventSubscriptionResult, GetTopicEventSubscriptionOutputArgs } from "./getTopicEventSubscription";
export const getTopicEventSubscription: typeof import("./getTopicEventSubscription").getTopicEventSubscription = null as any;
export const getTopicEventSubscriptionOutput: typeof import("./getTopicEventSubscription").getTopicEventSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getTopicEventSubscription","getTopicEventSubscriptionOutput"], () => require("./getTopicEventSubscription"));

export { GetTopicEventSubscriptionDeliveryAttributesArgs, GetTopicEventSubscriptionDeliveryAttributesResult, GetTopicEventSubscriptionDeliveryAttributesOutputArgs } from "./getTopicEventSubscriptionDeliveryAttributes";
export const getTopicEventSubscriptionDeliveryAttributes: typeof import("./getTopicEventSubscriptionDeliveryAttributes").getTopicEventSubscriptionDeliveryAttributes = null as any;
export const getTopicEventSubscriptionDeliveryAttributesOutput: typeof import("./getTopicEventSubscriptionDeliveryAttributes").getTopicEventSubscriptionDeliveryAttributesOutput = null as any;
utilities.lazyLoad(exports, ["getTopicEventSubscriptionDeliveryAttributes","getTopicEventSubscriptionDeliveryAttributesOutput"], () => require("./getTopicEventSubscriptionDeliveryAttributes"));

export { GetTopicEventSubscriptionFullUrlArgs, GetTopicEventSubscriptionFullUrlResult, GetTopicEventSubscriptionFullUrlOutputArgs } from "./getTopicEventSubscriptionFullUrl";
export const getTopicEventSubscriptionFullUrl: typeof import("./getTopicEventSubscriptionFullUrl").getTopicEventSubscriptionFullUrl = null as any;
export const getTopicEventSubscriptionFullUrlOutput: typeof import("./getTopicEventSubscriptionFullUrl").getTopicEventSubscriptionFullUrlOutput = null as any;
utilities.lazyLoad(exports, ["getTopicEventSubscriptionFullUrl","getTopicEventSubscriptionFullUrlOutput"], () => require("./getTopicEventSubscriptionFullUrl"));

export { GetTopicSpaceArgs, GetTopicSpaceResult, GetTopicSpaceOutputArgs } from "./getTopicSpace";
export const getTopicSpace: typeof import("./getTopicSpace").getTopicSpace = null as any;
export const getTopicSpaceOutput: typeof import("./getTopicSpace").getTopicSpaceOutput = null as any;
utilities.lazyLoad(exports, ["getTopicSpace","getTopicSpaceOutput"], () => require("./getTopicSpace"));

export { ListDomainSharedAccessKeysArgs, ListDomainSharedAccessKeysResult, ListDomainSharedAccessKeysOutputArgs } from "./listDomainSharedAccessKeys";
export const listDomainSharedAccessKeys: typeof import("./listDomainSharedAccessKeys").listDomainSharedAccessKeys = null as any;
export const listDomainSharedAccessKeysOutput: typeof import("./listDomainSharedAccessKeys").listDomainSharedAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDomainSharedAccessKeys","listDomainSharedAccessKeysOutput"], () => require("./listDomainSharedAccessKeys"));

export { ListNamespaceSharedAccessKeysArgs, ListNamespaceSharedAccessKeysResult, ListNamespaceSharedAccessKeysOutputArgs } from "./listNamespaceSharedAccessKeys";
export const listNamespaceSharedAccessKeys: typeof import("./listNamespaceSharedAccessKeys").listNamespaceSharedAccessKeys = null as any;
export const listNamespaceSharedAccessKeysOutput: typeof import("./listNamespaceSharedAccessKeys").listNamespaceSharedAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNamespaceSharedAccessKeys","listNamespaceSharedAccessKeysOutput"], () => require("./listNamespaceSharedAccessKeys"));

export { ListNamespaceTopicSharedAccessKeysArgs, ListNamespaceTopicSharedAccessKeysResult, ListNamespaceTopicSharedAccessKeysOutputArgs } from "./listNamespaceTopicSharedAccessKeys";
export const listNamespaceTopicSharedAccessKeys: typeof import("./listNamespaceTopicSharedAccessKeys").listNamespaceTopicSharedAccessKeys = null as any;
export const listNamespaceTopicSharedAccessKeysOutput: typeof import("./listNamespaceTopicSharedAccessKeys").listNamespaceTopicSharedAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listNamespaceTopicSharedAccessKeys","listNamespaceTopicSharedAccessKeysOutput"], () => require("./listNamespaceTopicSharedAccessKeys"));

export { ListPartnerNamespaceSharedAccessKeysArgs, ListPartnerNamespaceSharedAccessKeysResult, ListPartnerNamespaceSharedAccessKeysOutputArgs } from "./listPartnerNamespaceSharedAccessKeys";
export const listPartnerNamespaceSharedAccessKeys: typeof import("./listPartnerNamespaceSharedAccessKeys").listPartnerNamespaceSharedAccessKeys = null as any;
export const listPartnerNamespaceSharedAccessKeysOutput: typeof import("./listPartnerNamespaceSharedAccessKeys").listPartnerNamespaceSharedAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listPartnerNamespaceSharedAccessKeys","listPartnerNamespaceSharedAccessKeysOutput"], () => require("./listPartnerNamespaceSharedAccessKeys"));

export { ListTopicSharedAccessKeysArgs, ListTopicSharedAccessKeysResult, ListTopicSharedAccessKeysOutputArgs } from "./listTopicSharedAccessKeys";
export const listTopicSharedAccessKeys: typeof import("./listTopicSharedAccessKeys").listTopicSharedAccessKeys = null as any;
export const listTopicSharedAccessKeysOutput: typeof import("./listTopicSharedAccessKeys").listTopicSharedAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listTopicSharedAccessKeys","listTopicSharedAccessKeysOutput"], () => require("./listTopicSharedAccessKeys"));

export { NamespaceArgs } from "./namespace";
export type Namespace = import("./namespace").Namespace;
export const Namespace: typeof import("./namespace").Namespace = null as any;
utilities.lazyLoad(exports, ["Namespace"], () => require("./namespace"));

export { NamespaceTopicArgs } from "./namespaceTopic";
export type NamespaceTopic = import("./namespaceTopic").NamespaceTopic;
export const NamespaceTopic: typeof import("./namespaceTopic").NamespaceTopic = null as any;
utilities.lazyLoad(exports, ["NamespaceTopic"], () => require("./namespaceTopic"));

export { NamespaceTopicEventSubscriptionArgs } from "./namespaceTopicEventSubscription";
export type NamespaceTopicEventSubscription = import("./namespaceTopicEventSubscription").NamespaceTopicEventSubscription;
export const NamespaceTopicEventSubscription: typeof import("./namespaceTopicEventSubscription").NamespaceTopicEventSubscription = null as any;
utilities.lazyLoad(exports, ["NamespaceTopicEventSubscription"], () => require("./namespaceTopicEventSubscription"));

export { PartnerConfigurationArgs } from "./partnerConfiguration";
export type PartnerConfiguration = import("./partnerConfiguration").PartnerConfiguration;
export const PartnerConfiguration: typeof import("./partnerConfiguration").PartnerConfiguration = null as any;
utilities.lazyLoad(exports, ["PartnerConfiguration"], () => require("./partnerConfiguration"));

export { PartnerDestinationArgs } from "./partnerDestination";
export type PartnerDestination = import("./partnerDestination").PartnerDestination;
export const PartnerDestination: typeof import("./partnerDestination").PartnerDestination = null as any;
utilities.lazyLoad(exports, ["PartnerDestination"], () => require("./partnerDestination"));

export { PartnerNamespaceArgs } from "./partnerNamespace";
export type PartnerNamespace = import("./partnerNamespace").PartnerNamespace;
export const PartnerNamespace: typeof import("./partnerNamespace").PartnerNamespace = null as any;
utilities.lazyLoad(exports, ["PartnerNamespace"], () => require("./partnerNamespace"));

export { PartnerRegistrationArgs } from "./partnerRegistration";
export type PartnerRegistration = import("./partnerRegistration").PartnerRegistration;
export const PartnerRegistration: typeof import("./partnerRegistration").PartnerRegistration = null as any;
utilities.lazyLoad(exports, ["PartnerRegistration"], () => require("./partnerRegistration"));

export { PartnerTopicArgs } from "./partnerTopic";
export type PartnerTopic = import("./partnerTopic").PartnerTopic;
export const PartnerTopic: typeof import("./partnerTopic").PartnerTopic = null as any;
utilities.lazyLoad(exports, ["PartnerTopic"], () => require("./partnerTopic"));

export { PartnerTopicEventSubscriptionArgs } from "./partnerTopicEventSubscription";
export type PartnerTopicEventSubscription = import("./partnerTopicEventSubscription").PartnerTopicEventSubscription;
export const PartnerTopicEventSubscription: typeof import("./partnerTopicEventSubscription").PartnerTopicEventSubscription = null as any;
utilities.lazyLoad(exports, ["PartnerTopicEventSubscription"], () => require("./partnerTopicEventSubscription"));

export { PermissionBindingArgs } from "./permissionBinding";
export type PermissionBinding = import("./permissionBinding").PermissionBinding;
export const PermissionBinding: typeof import("./permissionBinding").PermissionBinding = null as any;
utilities.lazyLoad(exports, ["PermissionBinding"], () => require("./permissionBinding"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { SystemTopicArgs } from "./systemTopic";
export type SystemTopic = import("./systemTopic").SystemTopic;
export const SystemTopic: typeof import("./systemTopic").SystemTopic = null as any;
utilities.lazyLoad(exports, ["SystemTopic"], () => require("./systemTopic"));

export { SystemTopicEventSubscriptionArgs } from "./systemTopicEventSubscription";
export type SystemTopicEventSubscription = import("./systemTopicEventSubscription").SystemTopicEventSubscription;
export const SystemTopicEventSubscription: typeof import("./systemTopicEventSubscription").SystemTopicEventSubscription = null as any;
utilities.lazyLoad(exports, ["SystemTopicEventSubscription"], () => require("./systemTopicEventSubscription"));

export { TopicArgs } from "./topic";
export type Topic = import("./topic").Topic;
export const Topic: typeof import("./topic").Topic = null as any;
utilities.lazyLoad(exports, ["Topic"], () => require("./topic"));

export { TopicEventSubscriptionArgs } from "./topicEventSubscription";
export type TopicEventSubscription = import("./topicEventSubscription").TopicEventSubscription;
export const TopicEventSubscription: typeof import("./topicEventSubscription").TopicEventSubscription = null as any;
utilities.lazyLoad(exports, ["TopicEventSubscription"], () => require("./topicEventSubscription"));

export { TopicSpaceArgs } from "./topicSpace";
export type TopicSpace = import("./topicSpace").TopicSpace;
export const TopicSpace: typeof import("./topicSpace").TopicSpace = null as any;
utilities.lazyLoad(exports, ["TopicSpace"], () => require("./topicSpace"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20200401preview from "./v20200401preview";
import * as v20211015preview from "./v20211015preview";
import * as v20220615 from "./v20220615";
import * as v20230601preview from "./v20230601preview";
import * as v20231215preview from "./v20231215preview";

export {
    v20200401preview,
    v20211015preview,
    v20220615,
    v20230601preview,
    v20231215preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:eventgrid:CaCertificate":
                return new CaCertificate(name, <any>undefined, { urn })
            case "azure-native:eventgrid:Channel":
                return new Channel(name, <any>undefined, { urn })
            case "azure-native:eventgrid:Client":
                return new Client(name, <any>undefined, { urn })
            case "azure-native:eventgrid:ClientGroup":
                return new ClientGroup(name, <any>undefined, { urn })
            case "azure-native:eventgrid:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "azure-native:eventgrid:DomainEventSubscription":
                return new DomainEventSubscription(name, <any>undefined, { urn })
            case "azure-native:eventgrid:DomainTopic":
                return new DomainTopic(name, <any>undefined, { urn })
            case "azure-native:eventgrid:DomainTopicEventSubscription":
                return new DomainTopicEventSubscription(name, <any>undefined, { urn })
            case "azure-native:eventgrid:EventSubscription":
                return new EventSubscription(name, <any>undefined, { urn })
            case "azure-native:eventgrid:Namespace":
                return new Namespace(name, <any>undefined, { urn })
            case "azure-native:eventgrid:NamespaceTopic":
                return new NamespaceTopic(name, <any>undefined, { urn })
            case "azure-native:eventgrid:NamespaceTopicEventSubscription":
                return new NamespaceTopicEventSubscription(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PartnerConfiguration":
                return new PartnerConfiguration(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PartnerDestination":
                return new PartnerDestination(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PartnerNamespace":
                return new PartnerNamespace(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PartnerRegistration":
                return new PartnerRegistration(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PartnerTopic":
                return new PartnerTopic(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PartnerTopicEventSubscription":
                return new PartnerTopicEventSubscription(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PermissionBinding":
                return new PermissionBinding(name, <any>undefined, { urn })
            case "azure-native:eventgrid:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:eventgrid:SystemTopic":
                return new SystemTopic(name, <any>undefined, { urn })
            case "azure-native:eventgrid:SystemTopicEventSubscription":
                return new SystemTopicEventSubscription(name, <any>undefined, { urn })
            case "azure-native:eventgrid:Topic":
                return new Topic(name, <any>undefined, { urn })
            case "azure-native:eventgrid:TopicEventSubscription":
                return new TopicEventSubscription(name, <any>undefined, { urn })
            case "azure-native:eventgrid:TopicSpace":
                return new TopicSpace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "eventgrid", _module)
