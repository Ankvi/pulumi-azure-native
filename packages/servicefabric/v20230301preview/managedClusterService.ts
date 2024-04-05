import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The service resource.
 */
export class ManagedClusterService extends pulumi.CustomResource {
    /**
     * Get an existing ManagedClusterService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedClusterService {
        return new ManagedClusterService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric/v20230301preview:ManagedClusterService';

    /**
     * Returns true if the given object is an instance of ManagedClusterService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedClusterService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedClusterService.__pulumiType;
    }

    /**
     * Resource location depends on the parent resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The service resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.StatefulServicePropertiesResponse | types.outputs.StatelessServicePropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedClusterService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedClusterServiceArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric:ManagedClusterService" }, { type: "azure-native:servicefabric/v20210101preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20210501:ManagedClusterService" }, { type: "azure-native:servicefabric/v20210701preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20210901privatepreview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20211101preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20220101:ManagedClusterService" }, { type: "azure-native:servicefabric/v20220201preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20220601preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20220801preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20221001preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20230201preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20230701preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20230901preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20231101preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20231201preview:ManagedClusterService" }, { type: "azure-native:servicefabric/v20240201preview:ManagedClusterService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedClusterService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedClusterService resource.
 */
export interface ManagedClusterServiceArgs {
    /**
     * The name of the application resource.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Resource location depends on the parent resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The service resource properties.
     */
    properties?: pulumi.Input<types.inputs.StatefulServicePropertiesArgs | types.inputs.StatelessServicePropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service resource in the format of {applicationName}~{serviceName}.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}