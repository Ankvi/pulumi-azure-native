import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The application type name resource
 *
 * Uses Azure REST API version 2024-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApplicationType extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationType {
        return new ApplicationType(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric:ApplicationType';

    /**
     * Returns true if the given object is an instance of ApplicationType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationType.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Create a ApplicationType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationTypeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationTypeName"] = args ? args.applicationTypeName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20210101preview:ApplicationType" }, { type: "azure-native:servicefabric/v20210501:ApplicationType" }, { type: "azure-native:servicefabric/v20210601:ApplicationType" }, { type: "azure-native:servicefabric/v20210701preview:ApplicationType" }, { type: "azure-native:servicefabric/v20210901privatepreview:ApplicationType" }, { type: "azure-native:servicefabric/v20211101preview:ApplicationType" }, { type: "azure-native:servicefabric/v20220101:ApplicationType" }, { type: "azure-native:servicefabric/v20220201preview:ApplicationType" }, { type: "azure-native:servicefabric/v20220601preview:ApplicationType" }, { type: "azure-native:servicefabric/v20220801preview:ApplicationType" }, { type: "azure-native:servicefabric/v20221001preview:ApplicationType" }, { type: "azure-native:servicefabric/v20230201preview:ApplicationType" }, { type: "azure-native:servicefabric/v20230301preview:ApplicationType" }, { type: "azure-native:servicefabric/v20230301preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20230701preview:ApplicationType" }, { type: "azure-native:servicefabric/v20230701preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20230901preview:ApplicationType" }, { type: "azure-native:servicefabric/v20230901preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20231101preview:ApplicationType" }, { type: "azure-native:servicefabric/v20231101preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20231201preview:ApplicationType" }, { type: "azure-native:servicefabric/v20231201preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20240201preview:ApplicationType" }, { type: "azure-native:servicefabric/v20240201preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20240401:ApplicationType" }, { type: "azure-native:servicefabric/v20240401:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20240601preview:ApplicationType" }, { type: "azure-native:servicefabric/v20240601preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20240901preview:ApplicationType" }, { type: "azure-native:servicefabric/v20240901preview:ManagedClusterApplicationType" }, { type: "azure-native:servicefabric/v20241101preview:ApplicationType" }, { type: "azure-native:servicefabric/v20250301preview:ApplicationType" }, { type: "azure-native:servicefabric:ManagedClusterApplicationType" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApplicationType.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationType resource.
 */
export interface ApplicationTypeArgs {
    /**
     * The name of the application type name resource.
     */
    applicationTypeName?: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}