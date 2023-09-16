import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The grafana resource type.
 * Azure REST API version: 2022-08-01. Prior API version in Azure Native 1.x: 2022-05-01-preview
 */
export class Grafana extends pulumi.CustomResource {
    /**
     * Get an existing Grafana resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Grafana {
        return new Grafana(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dashboard:Grafana';

    /**
     * Returns true if the given object is an instance of Grafana.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Grafana {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Grafana.__pulumiType;
    }

    /**
     * The managed identity of the grafana resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.dashboard.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the grafana resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the grafana resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties specific to the grafana resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.dashboard.ManagedGrafanaPropertiesResponse>;
    /**
     * The Sku of the grafana resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.dashboard.ResourceSkuResponse | undefined>;
    /**
     * The system meta data relating to this grafana resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.dashboard.SystemDataResponse>;
    /**
     * The tags for grafana resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the grafana resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Grafana resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GrafanaArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dashboard/v20210901preview:Grafana" }, { type: "azure-native:dashboard/v20220501preview:Grafana" }, { type: "azure-native:dashboard/v20220801:Grafana" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Grafana.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Grafana resource.
 */
export interface GrafanaArgs {
    /**
     * The managed identity of the grafana resource.
     */
    identity?: pulumi.Input<types.inputs.dashboard.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the grafana resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Properties specific to the grafana resource.
     */
    properties?: pulumi.Input<types.inputs.dashboard.ManagedGrafanaPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Sku of the grafana resource.
     */
    sku?: pulumi.Input<types.inputs.dashboard.ResourceSkuArgs>;
    /**
     * The tags for grafana resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName?: pulumi.Input<string>;
}
