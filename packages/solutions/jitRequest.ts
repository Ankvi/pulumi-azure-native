import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about JIT request definition.
 * Azure REST API version: 2021-07-01. Prior API version in Azure Native 1.x: 2019-07-01.
 *
 * Other available API versions: 2023-12-01-preview.
 */
export class JitRequest extends pulumi.CustomResource {
    /**
     * Get an existing JitRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JitRequest {
        return new JitRequest(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:solutions:JitRequest';

    /**
     * Returns true if the given object is an instance of JitRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JitRequest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JitRequest.__pulumiType;
    }

    /**
     * The parent application id.
     */
    public readonly applicationResourceId!: pulumi.Output<string>;
    /**
     * The client entity that created the JIT request.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<types.outputs.ApplicationClientDetailsResponse>;
    /**
     * The JIT authorization policies.
     */
    public readonly jitAuthorizationPolicies!: pulumi.Output<types.outputs.JitAuthorizationPoliciesResponse[]>;
    /**
     * The JIT request state.
     */
    public /*out*/ readonly jitRequestState!: pulumi.Output<string>;
    /**
     * The JIT request properties.
     */
    public readonly jitSchedulingPolicy!: pulumi.Output<types.outputs.JitSchedulingPolicyResponse>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The JIT request provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The publisher tenant id.
     */
    public /*out*/ readonly publisherTenantId!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The client entity that last updated the JIT request.
     */
    public /*out*/ readonly updatedBy!: pulumi.Output<types.outputs.ApplicationClientDetailsResponse>;

    /**
     * Create a JitRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JitRequestArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.applicationResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationResourceId'");
            }
            if ((!args || args.jitAuthorizationPolicies === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jitAuthorizationPolicies'");
            }
            if ((!args || args.jitSchedulingPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jitSchedulingPolicy'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationResourceId"] = args ? args.applicationResourceId : undefined;
            resourceInputs["jitAuthorizationPolicies"] = args ? args.jitAuthorizationPolicies : undefined;
            resourceInputs["jitRequestName"] = args ? args.jitRequestName : undefined;
            resourceInputs["jitSchedulingPolicy"] = args ? args.jitSchedulingPolicy : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["jitRequestState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisherTenantId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
        } else {
            resourceInputs["applicationResourceId"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["jitAuthorizationPolicies"] = undefined /*out*/;
            resourceInputs["jitRequestState"] = undefined /*out*/;
            resourceInputs["jitSchedulingPolicy"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisherTenantId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:solutions/v20180301:JitRequest" }, { type: "azure-native:solutions/v20180601:JitRequest" }, { type: "azure-native:solutions/v20180901preview:JitRequest" }, { type: "azure-native:solutions/v20190701:JitRequest" }, { type: "azure-native:solutions/v20200821preview:JitRequest" }, { type: "azure-native:solutions/v20210201preview:JitRequest" }, { type: "azure-native:solutions/v20210701:JitRequest" }, { type: "azure-native:solutions/v20231201preview:JitRequest" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JitRequest.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JitRequest resource.
 */
export interface JitRequestArgs {
    /**
     * The parent application id.
     */
    applicationResourceId: pulumi.Input<string>;
    /**
     * The JIT authorization policies.
     */
    jitAuthorizationPolicies: pulumi.Input<pulumi.Input<types.inputs.JitAuthorizationPoliciesArgs>[]>;
    /**
     * The name of the JIT request.
     */
    jitRequestName?: pulumi.Input<string>;
    /**
     * The JIT request properties.
     */
    jitSchedulingPolicy: pulumi.Input<types.inputs.JitSchedulingPolicyArgs>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}