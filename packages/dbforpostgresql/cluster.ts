import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a cluster.
 *
 * Uses Azure REST API version 2022-11-08.
 *
 * Other available API versions: 2023-03-02-preview.
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * The administrator's login name of the servers in the cluster.
     */
    public /*out*/ readonly administratorLogin!: pulumi.Output<string>;
    /**
     * The Citus extension version on all cluster servers.
     */
    public readonly citusVersion!: pulumi.Output<string | undefined>;
    /**
     * If public access is enabled on coordinator.
     */
    public readonly coordinatorEnablePublicIpAccess!: pulumi.Output<boolean | undefined>;
    /**
     * The edition of a coordinator server (default: GeneralPurpose). Required for creation.
     */
    public readonly coordinatorServerEdition!: pulumi.Output<string | undefined>;
    /**
     * The storage of a server in MB. Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    public readonly coordinatorStorageQuotaInMb!: pulumi.Output<number | undefined>;
    /**
     * The vCores count of a server (max: 96). Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    public readonly coordinatorVCores!: pulumi.Output<number | undefined>;
    /**
     * The earliest restore point time (ISO8601 format) for the cluster.
     */
    public /*out*/ readonly earliestRestoreTime!: pulumi.Output<string>;
    /**
     * If high availability (HA) is enabled or not for the cluster.
     */
    public readonly enableHa!: pulumi.Output<boolean | undefined>;
    /**
     * If distributed tables are placed on coordinator or not. Should be set to 'true' on single node clusters. Requires shard rebalancing after value is changed.
     */
    public readonly enableShardsOnCoordinator!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Maintenance window of a cluster.
     */
    public readonly maintenanceWindow!: pulumi.Output<types.outputs.MaintenanceWindowResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation.
     */
    public readonly nodeCount!: pulumi.Output<number | undefined>;
    /**
     * If public access is enabled on worker nodes.
     */
    public readonly nodeEnablePublicIpAccess!: pulumi.Output<boolean | undefined>;
    /**
     * The edition of a node server (default: MemoryOptimized).
     */
    public readonly nodeServerEdition!: pulumi.Output<string | undefined>;
    /**
     * The storage in MB on each worker node. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    public readonly nodeStorageQuotaInMb!: pulumi.Output<number | undefined>;
    /**
     * The compute in vCores on each worker node (max: 104). See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    public readonly nodeVCores!: pulumi.Output<number | undefined>;
    /**
     * Date and time in UTC (ISO8601 format) for cluster restore.
     */
    public readonly pointInTimeUTC!: pulumi.Output<string | undefined>;
    /**
     * The major PostgreSQL version on all cluster servers.
     */
    public readonly postgresqlVersion!: pulumi.Output<string | undefined>;
    /**
     * Preferred primary availability zone (AZ) for all cluster servers.
     */
    public readonly preferredPrimaryZone!: pulumi.Output<string | undefined>;
    /**
     * The private endpoint connections for a cluster.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.SimplePrivateEndpointConnectionResponse[]>;
    /**
     * Provisioning state of the cluster
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The array of read replica clusters.
     */
    public /*out*/ readonly readReplicas!: pulumi.Output<string[]>;
    /**
     * The list of server names in the cluster
     */
    public /*out*/ readonly serverNames!: pulumi.Output<types.outputs.ServerNameItemResponse[]>;
    /**
     * The Azure region of source cluster for read replica clusters.
     */
    public readonly sourceLocation!: pulumi.Output<string | undefined>;
    /**
     * The resource id of source cluster for read replica clusters.
     */
    public readonly sourceResourceId!: pulumi.Output<string | undefined>;
    /**
     * A state of a cluster/server that is visible to user.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            resourceInputs["citusVersion"] = args ? args.citusVersion : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["coordinatorEnablePublicIpAccess"] = args ? args.coordinatorEnablePublicIpAccess : undefined;
            resourceInputs["coordinatorServerEdition"] = args ? args.coordinatorServerEdition : undefined;
            resourceInputs["coordinatorStorageQuotaInMb"] = args ? args.coordinatorStorageQuotaInMb : undefined;
            resourceInputs["coordinatorVCores"] = args ? args.coordinatorVCores : undefined;
            resourceInputs["enableHa"] = args ? args.enableHa : undefined;
            resourceInputs["enableShardsOnCoordinator"] = args ? args.enableShardsOnCoordinator : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maintenanceWindow"] = args ? (args.maintenanceWindow ? pulumi.output(args.maintenanceWindow).apply(types.inputs.maintenanceWindowArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["nodeCount"] = args ? args.nodeCount : undefined;
            resourceInputs["nodeEnablePublicIpAccess"] = args ? args.nodeEnablePublicIpAccess : undefined;
            resourceInputs["nodeServerEdition"] = args ? args.nodeServerEdition : undefined;
            resourceInputs["nodeStorageQuotaInMb"] = args ? args.nodeStorageQuotaInMb : undefined;
            resourceInputs["nodeVCores"] = args ? args.nodeVCores : undefined;
            resourceInputs["pointInTimeUTC"] = args ? args.pointInTimeUTC : undefined;
            resourceInputs["postgresqlVersion"] = args ? args.postgresqlVersion : undefined;
            resourceInputs["preferredPrimaryZone"] = args ? args.preferredPrimaryZone : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceLocation"] = args ? args.sourceLocation : undefined;
            resourceInputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["earliestRestoreTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["readReplicas"] = undefined /*out*/;
            resourceInputs["serverNames"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["citusVersion"] = undefined /*out*/;
            resourceInputs["coordinatorEnablePublicIpAccess"] = undefined /*out*/;
            resourceInputs["coordinatorServerEdition"] = undefined /*out*/;
            resourceInputs["coordinatorStorageQuotaInMb"] = undefined /*out*/;
            resourceInputs["coordinatorVCores"] = undefined /*out*/;
            resourceInputs["earliestRestoreTime"] = undefined /*out*/;
            resourceInputs["enableHa"] = undefined /*out*/;
            resourceInputs["enableShardsOnCoordinator"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maintenanceWindow"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeCount"] = undefined /*out*/;
            resourceInputs["nodeEnablePublicIpAccess"] = undefined /*out*/;
            resourceInputs["nodeServerEdition"] = undefined /*out*/;
            resourceInputs["nodeStorageQuotaInMb"] = undefined /*out*/;
            resourceInputs["nodeVCores"] = undefined /*out*/;
            resourceInputs["pointInTimeUTC"] = undefined /*out*/;
            resourceInputs["postgresqlVersion"] = undefined /*out*/;
            resourceInputs["preferredPrimaryZone"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["readReplicas"] = undefined /*out*/;
            resourceInputs["serverNames"] = undefined /*out*/;
            resourceInputs["sourceLocation"] = undefined /*out*/;
            resourceInputs["sourceResourceId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20201005privatepreview:Cluster" }, { type: "azure-native:dbforpostgresql/v20221108:Cluster" }, { type: "azure-native:dbforpostgresql/v20230302preview:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The password of the administrator login. Required for creation.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * The Citus extension version on all cluster servers.
     */
    citusVersion?: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * If public access is enabled on coordinator.
     */
    coordinatorEnablePublicIpAccess?: pulumi.Input<boolean>;
    /**
     * The edition of a coordinator server (default: GeneralPurpose). Required for creation.
     */
    coordinatorServerEdition?: pulumi.Input<string>;
    /**
     * The storage of a server in MB. Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    coordinatorStorageQuotaInMb?: pulumi.Input<number>;
    /**
     * The vCores count of a server (max: 96). Required for creation. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    coordinatorVCores?: pulumi.Input<number>;
    /**
     * If high availability (HA) is enabled or not for the cluster.
     */
    enableHa?: pulumi.Input<boolean>;
    /**
     * If distributed tables are placed on coordinator or not. Should be set to 'true' on single node clusters. Requires shard rebalancing after value is changed.
     */
    enableShardsOnCoordinator?: pulumi.Input<boolean>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Maintenance window of a cluster.
     */
    maintenanceWindow?: pulumi.Input<types.inputs.MaintenanceWindowArgs>;
    /**
     * Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * If public access is enabled on worker nodes.
     */
    nodeEnablePublicIpAccess?: pulumi.Input<boolean>;
    /**
     * The edition of a node server (default: MemoryOptimized).
     */
    nodeServerEdition?: pulumi.Input<string>;
    /**
     * The storage in MB on each worker node. See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    nodeStorageQuotaInMb?: pulumi.Input<number>;
    /**
     * The compute in vCores on each worker node (max: 104). See https://learn.microsoft.com/azure/cosmos-db/postgresql/resources-compute for more information.
     */
    nodeVCores?: pulumi.Input<number>;
    /**
     * Date and time in UTC (ISO8601 format) for cluster restore.
     */
    pointInTimeUTC?: pulumi.Input<string>;
    /**
     * The major PostgreSQL version on all cluster servers.
     */
    postgresqlVersion?: pulumi.Input<string>;
    /**
     * Preferred primary availability zone (AZ) for all cluster servers.
     */
    preferredPrimaryZone?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Azure region of source cluster for read replica clusters.
     */
    sourceLocation?: pulumi.Input<string>;
    /**
     * The resource id of source cluster for read replica clusters.
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}