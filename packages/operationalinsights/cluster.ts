import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The top level Log Analytics cluster resource container.
 *
 * Uses Azure REST API version 2023-09-01. In version 2.x of the Azure Native provider, it used API version 2021-06-01.
 *
 * Other available API versions: 2019-08-01-preview, 2020-03-01-preview, 2020-08-01, 2020-10-01, 2021-06-01, 2022-10-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:operationalinsights:Cluster';

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
     * The list of Log Analytics workspaces associated with the cluster
     */
    public /*out*/ readonly associatedWorkspaces!: pulumi.Output<types.outputs.AssociatedWorkspaceResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The cluster's billing type.
     */
    public readonly billingType!: pulumi.Output<string | undefined>;
    /**
     * Additional properties for capacity reservation
     */
    public /*out*/ readonly capacityReservationProperties!: pulumi.Output<types.outputs.CapacityReservationPropertiesResponse | undefined>;
    /**
     * The ID associated with the cluster.
     */
    public /*out*/ readonly clusterId!: pulumi.Output<string>;
    /**
     * The cluster creation time
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * Resource's identity.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
     */
    public readonly isAvailabilityZonesEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
     */
    public readonly isDoubleEncryptionEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The associated key properties.
     */
    public readonly keyVaultProperties!: pulumi.Output<types.outputs.KeyVaultPropertiesResponse | undefined>;
    /**
     * The last time the cluster was updated.
     */
    public /*out*/ readonly lastModifiedDate!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the cluster.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The sku properties.
     */
    public readonly sku!: pulumi.Output<types.outputs.ClusterSkuResponse | undefined>;
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
            resourceInputs["billingType"] = args ? args.billingType : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["isAvailabilityZonesEnabled"] = args ? args.isAvailabilityZonesEnabled : undefined;
            resourceInputs["isDoubleEncryptionEnabled"] = args ? args.isDoubleEncryptionEnabled : undefined;
            resourceInputs["keyVaultProperties"] = args ? args.keyVaultProperties : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["associatedWorkspaces"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["capacityReservationProperties"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["lastModifiedDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["associatedWorkspaces"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["billingType"] = undefined /*out*/;
            resourceInputs["capacityReservationProperties"] = undefined /*out*/;
            resourceInputs["clusterId"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["isAvailabilityZonesEnabled"] = undefined /*out*/;
            resourceInputs["isDoubleEncryptionEnabled"] = undefined /*out*/;
            resourceInputs["keyVaultProperties"] = undefined /*out*/;
            resourceInputs["lastModifiedDate"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20190801preview:Cluster" }, { type: "azure-native:operationalinsights/v20200301preview:Cluster" }, { type: "azure-native:operationalinsights/v20200801:Cluster" }, { type: "azure-native:operationalinsights/v20201001:Cluster" }, { type: "azure-native:operationalinsights/v20210601:Cluster" }, { type: "azure-native:operationalinsights/v20221001:Cluster" }, { type: "azure-native:operationalinsights/v20230901:Cluster" }, { type: "azure-native:operationalinsights/v20250201:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The cluster's billing type.
     */
    billingType?: pulumi.Input<string | types.enums.BillingType>;
    /**
     * The name of the Log Analytics cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Resource's identity.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
     */
    isAvailabilityZonesEnabled?: pulumi.Input<boolean>;
    /**
     * Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
     */
    isDoubleEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * The associated key properties.
     */
    keyVaultProperties?: pulumi.Input<types.inputs.KeyVaultPropertiesArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku properties.
     */
    sku?: pulumi.Input<types.inputs.ClusterSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}