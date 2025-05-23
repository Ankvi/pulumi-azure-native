import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The service resource.
 *
 * Uses Azure REST API version 2024-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-11-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
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
     * The service resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.StatefulServicePropertiesResponse | types.outputs.StatelessServicePropertiesResponse>;
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
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationName'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20210101preview:Service" }, { type: "azure-native:servicefabric/v20210501:Service" }, { type: "azure-native:servicefabric/v20210601:Service" }, { type: "azure-native:servicefabric/v20210701preview:Service" }, { type: "azure-native:servicefabric/v20210901privatepreview:Service" }, { type: "azure-native:servicefabric/v20211101preview:Service" }, { type: "azure-native:servicefabric/v20220101:Service" }, { type: "azure-native:servicefabric/v20220201preview:Service" }, { type: "azure-native:servicefabric/v20220601preview:Service" }, { type: "azure-native:servicefabric/v20220801preview:Service" }, { type: "azure-native:servicefabric/v20221001preview:Service" }, { type: "azure-native:servicefabric/v20230201preview:Service" }, { type: "azure-native:servicefabric/v20230301preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20230301preview:Service" }, { type: "azure-native:servicefabric/v20230701preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20230701preview:Service" }, { type: "azure-native:servicefabric/v20230901preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20230901preview:Service" }, { type: "azure-native:servicefabric/v20231101preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20231101preview:Service" }, { type: "azure-native:servicefabric/v20231201preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20231201preview:Service" }, { type: "azure-native:servicefabric/v20240201preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20240201preview:Service" }, { type: "azure-native:servicefabric/v20240401:ManagedClusterService" }, { type: "azure-native:servicefabric/v20240401:Service" }, { type: "azure-native:servicefabric/v20240601preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20240601preview:Service" }, { type: "azure-native:servicefabric/v20240901preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20240901preview:Service" }, { type: "azure-native:servicefabric/v20241101preview:Service" }, { type: "azure-native:servicefabric/v20250301preview:Service" }, { type: "azure-native:servicefabric:ManagedClusterService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Service.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The name of the application resource.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The service resource properties.
     */
    properties?: pulumi.Input<types.inputs.StatefulServicePropertiesArgs | types.inputs.StatelessServicePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service resource in the format of {applicationName}~{serviceName}.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}