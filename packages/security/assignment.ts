import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Security Assignment on a resource group over a given scope
 *
 * Uses Azure REST API version 2021-08-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-08-01-preview.
 */
export class Assignment extends pulumi.CustomResource {
    /**
     * Get an existing Assignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Assignment {
        return new Assignment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:Assignment';

    /**
     * Returns true if the given object is an instance of Assignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Assignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Assignment.__pulumiType;
    }

    /**
     * Additional data about the assignment
     */
    public readonly additionalData!: pulumi.Output<types.outputs.AssignmentPropertiesResponseAdditionalData | undefined>;
    /**
     * Component item with key as applied to this standard assignment over the given scope
     */
    public readonly assignedComponent!: pulumi.Output<types.outputs.AssignedComponentItemResponse | undefined>;
    /**
     * Standard item with key as applied to this standard assignment over the given scope
     */
    public readonly assignedStandard!: pulumi.Output<types.outputs.AssignedStandardItemResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * description of the standardAssignment
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * display name of the standardAssignment
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * expected effect of this assignment (Disable/Exempt/etc)
     */
    public readonly effect!: pulumi.Output<string | undefined>;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Expiration date of this assignment as a full ISO date
     */
    public readonly expiresOn!: pulumi.Output<string | undefined>;
    /**
     * Kind of the resource
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Location where the resource is stored
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    public readonly metadata!: pulumi.Output<any | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Scope to which the standardAssignment applies - can be a subscription path or a resource group under that subscription
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * A list of key value pairs that describe the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Assignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssignmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["additionalData"] = args ? args.additionalData : undefined;
            resourceInputs["assignedComponent"] = args ? args.assignedComponent : undefined;
            resourceInputs["assignedStandard"] = args ? args.assignedStandard : undefined;
            resourceInputs["assignmentId"] = args ? args.assignmentId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["effect"] = args ? args.effect : undefined;
            resourceInputs["expiresOn"] = args ? args.expiresOn : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["additionalData"] = undefined /*out*/;
            resourceInputs["assignedComponent"] = undefined /*out*/;
            resourceInputs["assignedStandard"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["effect"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expiresOn"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20210801preview:Assignment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Assignment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Assignment resource.
 */
export interface AssignmentArgs {
    /**
     * Additional data about the assignment
     */
    additionalData?: pulumi.Input<types.inputs.AssignmentPropertiesAdditionalDataArgs>;
    /**
     * Component item with key as applied to this standard assignment over the given scope
     */
    assignedComponent?: pulumi.Input<types.inputs.AssignedComponentItemArgs>;
    /**
     * Standard item with key as applied to this standard assignment over the given scope
     */
    assignedStandard?: pulumi.Input<types.inputs.AssignedStandardItemArgs>;
    /**
     * The security assignment key - unique key for the standard assignment
     */
    assignmentId?: pulumi.Input<string>;
    /**
     * description of the standardAssignment
     */
    description?: pulumi.Input<string>;
    /**
     * display name of the standardAssignment
     */
    displayName?: pulumi.Input<string>;
    /**
     * expected effect of this assignment (Disable/Exempt/etc)
     */
    effect?: pulumi.Input<string>;
    /**
     * Expiration date of this assignment as a full ISO date
     */
    expiresOn?: pulumi.Input<string>;
    /**
     * Kind of the resource
     */
    kind?: pulumi.Input<string>;
    /**
     * Location where the resource is stored
     */
    location?: pulumi.Input<string>;
    /**
     * The assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    metadata?: any;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Scope to which the standardAssignment applies - can be a subscription path or a resource group under that subscription
     */
    scope?: pulumi.Input<string>;
    /**
     * A list of key value pairs that describe the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}