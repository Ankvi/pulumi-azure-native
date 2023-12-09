import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a scaling plan definition.
 */
export class ScalingPlan extends pulumi.CustomResource {
    /**
     * Get an existing ScalingPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScalingPlan {
        return new ScalingPlan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization/v20210201preview:ScalingPlan';

    /**
     * Returns true if the given object is an instance of ScalingPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScalingPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScalingPlan.__pulumiType;
    }

    /**
     * Description of scaling plan.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. 
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Exclusion tag for scaling plan.
     */
    public readonly exclusionTag!: pulumi.Output<string | undefined>;
    /**
     * User friendly name of scaling plan.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * List of ScalingHostPoolReference definitions.
     */
    public readonly hostPoolReferences!: pulumi.Output<types.outputs.ScalingHostPoolReferenceResponse[] | undefined>;
    /**
     * HostPool type for desktop.
     */
    public readonly hostPoolType!: pulumi.Output<string | undefined>;
    public readonly identity!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponseIdentity | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ObjectId of scaling plan. (internal use)
     */
    public /*out*/ readonly objectId!: pulumi.Output<string>;
    public readonly plan!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponsePlan | undefined>;
    /**
     * The ring number of scaling plan.
     */
    public readonly ring!: pulumi.Output<number | undefined>;
    /**
     * List of ScalingSchedule definitions.
     */
    public readonly schedules!: pulumi.Output<types.outputs.ScalingScheduleResponse[] | undefined>;
    public readonly sku!: pulumi.Output<types.outputs.ResourceModelWithAllowedPropertySetResponseSku | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Timezone of the scaling plan.
     */
    public readonly timeZone!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ScalingPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScalingPlanArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["exclusionTag"] = args ? args.exclusionTag : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["hostPoolReferences"] = args ? args.hostPoolReferences : undefined;
            resourceInputs["hostPoolType"] = args ? args.hostPoolType : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ring"] = args ? args.ring : undefined;
            resourceInputs["scalingPlanName"] = args ? args.scalingPlanName : undefined;
            resourceInputs["schedules"] = args ? args.schedules : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["exclusionTag"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["hostPoolReferences"] = undefined /*out*/;
            resourceInputs["hostPoolType"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["plan"] = undefined /*out*/;
            resourceInputs["ring"] = undefined /*out*/;
            resourceInputs["schedules"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20201110preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20210114preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20210309preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20210401preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20210712:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20210903preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20220210preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20220401preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20220909:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20221014preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20230707preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20230905:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20231004preview:ScalingPlan" }, { type: "azure-native:desktopvirtualization/v20231101preview:ScalingPlan" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScalingPlan.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScalingPlan resource.
 */
export interface ScalingPlanArgs {
    /**
     * Description of scaling plan.
     */
    description?: pulumi.Input<string>;
    /**
     * Exclusion tag for scaling plan.
     */
    exclusionTag?: pulumi.Input<string>;
    /**
     * User friendly name of scaling plan.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * List of ScalingHostPoolReference definitions.
     */
    hostPoolReferences?: pulumi.Input<pulumi.Input<types.inputs.ScalingHostPoolReferenceArgs>[]>;
    /**
     * HostPool type for desktop.
     */
    hostPoolType?: pulumi.Input<string | types.enums.HostPoolType>;
    identity?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetIdentityArgs>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
     */
    managedBy?: pulumi.Input<string>;
    plan?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetPlanArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ring number of scaling plan.
     */
    ring?: pulumi.Input<number>;
    /**
     * The name of the scaling plan.
     */
    scalingPlanName?: pulumi.Input<string>;
    /**
     * List of ScalingSchedule definitions.
     */
    schedules?: pulumi.Input<pulumi.Input<types.inputs.ScalingScheduleArgs>[]>;
    sku?: pulumi.Input<types.inputs.ResourceModelWithAllowedPropertySetSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Timezone of the scaling plan.
     */
    timeZone?: pulumi.Input<string>;
}
