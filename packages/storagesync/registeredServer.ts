import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Registered Server resource.
 *
 * Uses Azure REST API version 2022-09-01. In version 2.x of the Azure Native provider, it used API version 2022-06-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RegisteredServer extends pulumi.CustomResource {
    /**
     * Get an existing RegisteredServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegisteredServer {
        return new RegisteredServer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagesync:RegisteredServer';

    /**
     * Returns true if the given object is an instance of RegisteredServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegisteredServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegisteredServer.__pulumiType;
    }

    /**
     * Server auth type.
     */
    public /*out*/ readonly activeAuthType!: pulumi.Output<string>;
    /**
     * Registered Server Agent Version
     */
    public readonly agentVersion!: pulumi.Output<string | undefined>;
    /**
     * Registered Server Agent Version Expiration Date
     */
    public /*out*/ readonly agentVersionExpirationDate!: pulumi.Output<string>;
    /**
     * Registered Server Agent Version Status
     */
    public /*out*/ readonly agentVersionStatus!: pulumi.Output<string>;
    /**
     * Server Application Id
     */
    public readonly applicationId!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Registered Server clusterId
     */
    public readonly clusterId!: pulumi.Output<string | undefined>;
    /**
     * Registered Server clusterName
     */
    public readonly clusterName!: pulumi.Output<string | undefined>;
    /**
     * Resource discoveryEndpointUri
     */
    public /*out*/ readonly discoveryEndpointUri!: pulumi.Output<string | undefined>;
    /**
     * Friendly Name
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * Apply server with newly discovered ApplicationId if available.
     */
    public readonly identity!: pulumi.Output<boolean>;
    /**
     * Registered Server last heart beat
     */
    public readonly lastHeartBeat!: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    public /*out*/ readonly lastOperationName!: pulumi.Output<string | undefined>;
    /**
     * Registered Server lastWorkflowId
     */
    public /*out*/ readonly lastWorkflowId!: pulumi.Output<string | undefined>;
    /**
     * Latest Server Application Id discovered from the server. It is not yet applied.
     */
    public /*out*/ readonly latestApplicationId!: pulumi.Output<string | undefined>;
    /**
     * Management Endpoint Uri
     */
    public /*out*/ readonly managementEndpointUri!: pulumi.Output<string | undefined>;
    /**
     * Monitoring Configuration
     */
    public /*out*/ readonly monitoringConfiguration!: pulumi.Output<string | undefined>;
    /**
     * Telemetry Endpoint Uri
     */
    public /*out*/ readonly monitoringEndpointUri!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Registered Server Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Resource Location
     */
    public /*out*/ readonly resourceLocation!: pulumi.Output<string | undefined>;
    /**
     * Registered Server Certificate
     */
    public readonly serverCertificate!: pulumi.Output<string | undefined>;
    /**
     * Registered Server serverId
     */
    public readonly serverId!: pulumi.Output<string | undefined>;
    /**
     * Registered Server Management Error Code
     */
    public /*out*/ readonly serverManagementErrorCode!: pulumi.Output<number | undefined>;
    /**
     * Server name
     */
    public /*out*/ readonly serverName!: pulumi.Output<string>;
    /**
     * Registered Server OS Version
     */
    public readonly serverOSVersion!: pulumi.Output<string | undefined>;
    /**
     * Registered Server serverRole
     */
    public readonly serverRole!: pulumi.Output<string | undefined>;
    /**
     * Service Location
     */
    public /*out*/ readonly serviceLocation!: pulumi.Output<string | undefined>;
    /**
     * Registered Server storageSyncServiceUid
     */
    public /*out*/ readonly storageSyncServiceUid!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegisteredServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegisteredServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageSyncServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageSyncServiceName'");
            }
            resourceInputs["agentVersion"] = args ? args.agentVersion : undefined;
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["lastHeartBeat"] = args ? args.lastHeartBeat : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverCertificate"] = args ? args.serverCertificate : undefined;
            resourceInputs["serverId"] = args ? args.serverId : undefined;
            resourceInputs["serverOSVersion"] = args ? args.serverOSVersion : undefined;
            resourceInputs["serverRole"] = args ? args.serverRole : undefined;
            resourceInputs["storageSyncServiceName"] = args ? args.storageSyncServiceName : undefined;
            resourceInputs["activeAuthType"] = undefined /*out*/;
            resourceInputs["agentVersionExpirationDate"] = undefined /*out*/;
            resourceInputs["agentVersionStatus"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["discoveryEndpointUri"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["latestApplicationId"] = undefined /*out*/;
            resourceInputs["managementEndpointUri"] = undefined /*out*/;
            resourceInputs["monitoringConfiguration"] = undefined /*out*/;
            resourceInputs["monitoringEndpointUri"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceLocation"] = undefined /*out*/;
            resourceInputs["serverManagementErrorCode"] = undefined /*out*/;
            resourceInputs["serverName"] = undefined /*out*/;
            resourceInputs["serviceLocation"] = undefined /*out*/;
            resourceInputs["storageSyncServiceUid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activeAuthType"] = undefined /*out*/;
            resourceInputs["agentVersion"] = undefined /*out*/;
            resourceInputs["agentVersionExpirationDate"] = undefined /*out*/;
            resourceInputs["agentVersionStatus"] = undefined /*out*/;
            resourceInputs["applicationId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["clusterName"] = undefined /*out*/;
            resourceInputs["discoveryEndpointUri"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["lastHeartBeat"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["latestApplicationId"] = undefined /*out*/;
            resourceInputs["managementEndpointUri"] = undefined /*out*/;
            resourceInputs["monitoringConfiguration"] = undefined /*out*/;
            resourceInputs["monitoringEndpointUri"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceLocation"] = undefined /*out*/;
            resourceInputs["serverCertificate"] = undefined /*out*/;
            resourceInputs["serverId"] = undefined /*out*/;
            resourceInputs["serverManagementErrorCode"] = undefined /*out*/;
            resourceInputs["serverName"] = undefined /*out*/;
            resourceInputs["serverOSVersion"] = undefined /*out*/;
            resourceInputs["serverRole"] = undefined /*out*/;
            resourceInputs["serviceLocation"] = undefined /*out*/;
            resourceInputs["storageSyncServiceUid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagesync/v20170605preview:RegisteredServer" }, { type: "azure-native:storagesync/v20180402:RegisteredServer" }, { type: "azure-native:storagesync/v20180701:RegisteredServer" }, { type: "azure-native:storagesync/v20181001:RegisteredServer" }, { type: "azure-native:storagesync/v20190201:RegisteredServer" }, { type: "azure-native:storagesync/v20190301:RegisteredServer" }, { type: "azure-native:storagesync/v20190601:RegisteredServer" }, { type: "azure-native:storagesync/v20191001:RegisteredServer" }, { type: "azure-native:storagesync/v20200301:RegisteredServer" }, { type: "azure-native:storagesync/v20200901:RegisteredServer" }, { type: "azure-native:storagesync/v20220601:RegisteredServer" }, { type: "azure-native:storagesync/v20220901:RegisteredServer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegisteredServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegisteredServer resource.
 */
export interface RegisteredServerArgs {
    /**
     * Registered Server Agent Version
     */
    agentVersion?: pulumi.Input<string>;
    /**
     * Server ServicePrincipal Id
     */
    applicationId?: pulumi.Input<string>;
    /**
     * Registered Server clusterId
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Registered Server clusterName
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Friendly Name
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Apply server with newly discovered ApplicationId if available.
     */
    identity?: pulumi.Input<boolean>;
    /**
     * Registered Server last heart beat
     */
    lastHeartBeat?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Registered Server Certificate
     */
    serverCertificate?: pulumi.Input<string>;
    /**
     * Registered Server serverId
     */
    serverId?: pulumi.Input<string>;
    /**
     * Registered Server OS Version
     */
    serverOSVersion?: pulumi.Input<string>;
    /**
     * Registered Server serverRole
     */
    serverRole?: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: pulumi.Input<string>;
}