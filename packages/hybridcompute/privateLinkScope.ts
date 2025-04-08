import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Arc PrivateLinkScope definition.
 *
 * Uses Azure REST API version 2022-12-27. In version 1.x of the Azure Native provider, it used API version 2021-03-25-preview.
 *
 * Other available API versions: 2020-08-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-10, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13.
 */
export class PrivateLinkScope extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkScope {
        return new PrivateLinkScope(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcompute:PrivateLinkScope';

    /**
     * Returns true if the given object is an instance of PrivateLinkScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateLinkScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateLinkScope.__pulumiType;
    }

    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.HybridComputePrivateLinkScopePropertiesResponse>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateLinkScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkScopeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopeName"] = args ? args.scopeName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute/v20200815preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20210128preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20210325preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20210422preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20210517preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20210520:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20210610preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20211210preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20220310:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20220510preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20220811preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20221110:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20221227:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20221227preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20230315preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20230620preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20231003preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20240331preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20240520preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20240710:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20240731preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20240910preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20241110preview:PrivateLinkScope" }, { type: "azure-native:hybridcompute/v20250113:PrivateLinkScope" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateLinkScope.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateLinkScope resource.
 */
export interface PrivateLinkScopeArgs {
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    properties?: pulumi.Input<types.inputs.HybridComputePrivateLinkScopePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}