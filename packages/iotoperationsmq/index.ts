import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BrokerArgs } from "./broker";
export type Broker = import("./broker").Broker;
export const Broker: typeof import("./broker").Broker = null as any;
utilities.lazyLoad(exports, ["Broker"], () => require("./broker"));

export { BrokerAuthenticationArgs } from "./brokerAuthentication";
export type BrokerAuthentication = import("./brokerAuthentication").BrokerAuthentication;
export const BrokerAuthentication: typeof import("./brokerAuthentication").BrokerAuthentication = null as any;
utilities.lazyLoad(exports, ["BrokerAuthentication"], () => require("./brokerAuthentication"));

export { BrokerAuthorizationArgs } from "./brokerAuthorization";
export type BrokerAuthorization = import("./brokerAuthorization").BrokerAuthorization;
export const BrokerAuthorization: typeof import("./brokerAuthorization").BrokerAuthorization = null as any;
utilities.lazyLoad(exports, ["BrokerAuthorization"], () => require("./brokerAuthorization"));

export { BrokerListenerArgs } from "./brokerListener";
export type BrokerListener = import("./brokerListener").BrokerListener;
export const BrokerListener: typeof import("./brokerListener").BrokerListener = null as any;
utilities.lazyLoad(exports, ["BrokerListener"], () => require("./brokerListener"));

export { DataLakeConnectorArgs } from "./dataLakeConnector";
export type DataLakeConnector = import("./dataLakeConnector").DataLakeConnector;
export const DataLakeConnector: typeof import("./dataLakeConnector").DataLakeConnector = null as any;
utilities.lazyLoad(exports, ["DataLakeConnector"], () => require("./dataLakeConnector"));

export { DataLakeConnectorTopicMapArgs } from "./dataLakeConnectorTopicMap";
export type DataLakeConnectorTopicMap = import("./dataLakeConnectorTopicMap").DataLakeConnectorTopicMap;
export const DataLakeConnectorTopicMap: typeof import("./dataLakeConnectorTopicMap").DataLakeConnectorTopicMap = null as any;
utilities.lazyLoad(exports, ["DataLakeConnectorTopicMap"], () => require("./dataLakeConnectorTopicMap"));

export { DiagnosticServiceArgs } from "./diagnosticService";
export type DiagnosticService = import("./diagnosticService").DiagnosticService;
export const DiagnosticService: typeof import("./diagnosticService").DiagnosticService = null as any;
utilities.lazyLoad(exports, ["DiagnosticService"], () => require("./diagnosticService"));

export { GetBrokerArgs, GetBrokerResult, GetBrokerOutputArgs } from "./getBroker";
export const getBroker: typeof import("./getBroker").getBroker = null as any;
export const getBrokerOutput: typeof import("./getBroker").getBrokerOutput = null as any;
utilities.lazyLoad(exports, ["getBroker","getBrokerOutput"], () => require("./getBroker"));

export { GetBrokerAuthenticationArgs, GetBrokerAuthenticationResult, GetBrokerAuthenticationOutputArgs } from "./getBrokerAuthentication";
export const getBrokerAuthentication: typeof import("./getBrokerAuthentication").getBrokerAuthentication = null as any;
export const getBrokerAuthenticationOutput: typeof import("./getBrokerAuthentication").getBrokerAuthenticationOutput = null as any;
utilities.lazyLoad(exports, ["getBrokerAuthentication","getBrokerAuthenticationOutput"], () => require("./getBrokerAuthentication"));

export { GetBrokerAuthorizationArgs, GetBrokerAuthorizationResult, GetBrokerAuthorizationOutputArgs } from "./getBrokerAuthorization";
export const getBrokerAuthorization: typeof import("./getBrokerAuthorization").getBrokerAuthorization = null as any;
export const getBrokerAuthorizationOutput: typeof import("./getBrokerAuthorization").getBrokerAuthorizationOutput = null as any;
utilities.lazyLoad(exports, ["getBrokerAuthorization","getBrokerAuthorizationOutput"], () => require("./getBrokerAuthorization"));

export { GetBrokerListenerArgs, GetBrokerListenerResult, GetBrokerListenerOutputArgs } from "./getBrokerListener";
export const getBrokerListener: typeof import("./getBrokerListener").getBrokerListener = null as any;
export const getBrokerListenerOutput: typeof import("./getBrokerListener").getBrokerListenerOutput = null as any;
utilities.lazyLoad(exports, ["getBrokerListener","getBrokerListenerOutput"], () => require("./getBrokerListener"));

export { GetDataLakeConnectorArgs, GetDataLakeConnectorResult, GetDataLakeConnectorOutputArgs } from "./getDataLakeConnector";
export const getDataLakeConnector: typeof import("./getDataLakeConnector").getDataLakeConnector = null as any;
export const getDataLakeConnectorOutput: typeof import("./getDataLakeConnector").getDataLakeConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getDataLakeConnector","getDataLakeConnectorOutput"], () => require("./getDataLakeConnector"));

export { GetDataLakeConnectorTopicMapArgs, GetDataLakeConnectorTopicMapResult, GetDataLakeConnectorTopicMapOutputArgs } from "./getDataLakeConnectorTopicMap";
export const getDataLakeConnectorTopicMap: typeof import("./getDataLakeConnectorTopicMap").getDataLakeConnectorTopicMap = null as any;
export const getDataLakeConnectorTopicMapOutput: typeof import("./getDataLakeConnectorTopicMap").getDataLakeConnectorTopicMapOutput = null as any;
utilities.lazyLoad(exports, ["getDataLakeConnectorTopicMap","getDataLakeConnectorTopicMapOutput"], () => require("./getDataLakeConnectorTopicMap"));

export { GetDiagnosticServiceArgs, GetDiagnosticServiceResult, GetDiagnosticServiceOutputArgs } from "./getDiagnosticService";
export const getDiagnosticService: typeof import("./getDiagnosticService").getDiagnosticService = null as any;
export const getDiagnosticServiceOutput: typeof import("./getDiagnosticService").getDiagnosticServiceOutput = null as any;
utilities.lazyLoad(exports, ["getDiagnosticService","getDiagnosticServiceOutput"], () => require("./getDiagnosticService"));

export { GetKafkaConnectorArgs, GetKafkaConnectorResult, GetKafkaConnectorOutputArgs } from "./getKafkaConnector";
export const getKafkaConnector: typeof import("./getKafkaConnector").getKafkaConnector = null as any;
export const getKafkaConnectorOutput: typeof import("./getKafkaConnector").getKafkaConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getKafkaConnector","getKafkaConnectorOutput"], () => require("./getKafkaConnector"));

export { GetKafkaConnectorTopicMapArgs, GetKafkaConnectorTopicMapResult, GetKafkaConnectorTopicMapOutputArgs } from "./getKafkaConnectorTopicMap";
export const getKafkaConnectorTopicMap: typeof import("./getKafkaConnectorTopicMap").getKafkaConnectorTopicMap = null as any;
export const getKafkaConnectorTopicMapOutput: typeof import("./getKafkaConnectorTopicMap").getKafkaConnectorTopicMapOutput = null as any;
utilities.lazyLoad(exports, ["getKafkaConnectorTopicMap","getKafkaConnectorTopicMapOutput"], () => require("./getKafkaConnectorTopicMap"));

export { GetMqArgs, GetMqResult, GetMqOutputArgs } from "./getMq";
export const getMq: typeof import("./getMq").getMq = null as any;
export const getMqOutput: typeof import("./getMq").getMqOutput = null as any;
utilities.lazyLoad(exports, ["getMq","getMqOutput"], () => require("./getMq"));

export { GetMqttBridgeConnectorArgs, GetMqttBridgeConnectorResult, GetMqttBridgeConnectorOutputArgs } from "./getMqttBridgeConnector";
export const getMqttBridgeConnector: typeof import("./getMqttBridgeConnector").getMqttBridgeConnector = null as any;
export const getMqttBridgeConnectorOutput: typeof import("./getMqttBridgeConnector").getMqttBridgeConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getMqttBridgeConnector","getMqttBridgeConnectorOutput"], () => require("./getMqttBridgeConnector"));

export { GetMqttBridgeTopicMapArgs, GetMqttBridgeTopicMapResult, GetMqttBridgeTopicMapOutputArgs } from "./getMqttBridgeTopicMap";
export const getMqttBridgeTopicMap: typeof import("./getMqttBridgeTopicMap").getMqttBridgeTopicMap = null as any;
export const getMqttBridgeTopicMapOutput: typeof import("./getMqttBridgeTopicMap").getMqttBridgeTopicMapOutput = null as any;
utilities.lazyLoad(exports, ["getMqttBridgeTopicMap","getMqttBridgeTopicMapOutput"], () => require("./getMqttBridgeTopicMap"));

export { KafkaConnectorArgs } from "./kafkaConnector";
export type KafkaConnector = import("./kafkaConnector").KafkaConnector;
export const KafkaConnector: typeof import("./kafkaConnector").KafkaConnector = null as any;
utilities.lazyLoad(exports, ["KafkaConnector"], () => require("./kafkaConnector"));

export { KafkaConnectorTopicMapArgs } from "./kafkaConnectorTopicMap";
export type KafkaConnectorTopicMap = import("./kafkaConnectorTopicMap").KafkaConnectorTopicMap;
export const KafkaConnectorTopicMap: typeof import("./kafkaConnectorTopicMap").KafkaConnectorTopicMap = null as any;
utilities.lazyLoad(exports, ["KafkaConnectorTopicMap"], () => require("./kafkaConnectorTopicMap"));

export { MqArgs } from "./mq";
export type Mq = import("./mq").Mq;
export const Mq: typeof import("./mq").Mq = null as any;
utilities.lazyLoad(exports, ["Mq"], () => require("./mq"));

export { MqttBridgeConnectorArgs } from "./mqttBridgeConnector";
export type MqttBridgeConnector = import("./mqttBridgeConnector").MqttBridgeConnector;
export const MqttBridgeConnector: typeof import("./mqttBridgeConnector").MqttBridgeConnector = null as any;
utilities.lazyLoad(exports, ["MqttBridgeConnector"], () => require("./mqttBridgeConnector"));

export { MqttBridgeTopicMapArgs } from "./mqttBridgeTopicMap";
export type MqttBridgeTopicMap = import("./mqttBridgeTopicMap").MqttBridgeTopicMap;
export const MqttBridgeTopicMap: typeof import("./mqttBridgeTopicMap").MqttBridgeTopicMap = null as any;
utilities.lazyLoad(exports, ["MqttBridgeTopicMap"], () => require("./mqttBridgeTopicMap"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iotoperationsmq:Broker":
                return new Broker(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:BrokerAuthentication":
                return new BrokerAuthentication(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:BrokerAuthorization":
                return new BrokerAuthorization(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:BrokerListener":
                return new BrokerListener(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:DataLakeConnector":
                return new DataLakeConnector(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:DataLakeConnectorTopicMap":
                return new DataLakeConnectorTopicMap(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:DiagnosticService":
                return new DiagnosticService(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:KafkaConnector":
                return new KafkaConnector(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:KafkaConnectorTopicMap":
                return new KafkaConnectorTopicMap(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:Mq":
                return new Mq(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:MqttBridgeConnector":
                return new MqttBridgeConnector(name, <any>undefined, { urn })
            case "azure-native:iotoperationsmq:MqttBridgeTopicMap":
                return new MqttBridgeTopicMap(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotoperationsmq", _module)