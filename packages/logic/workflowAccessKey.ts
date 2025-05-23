import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Uses Azure REST API version 2015-02-01-preview. In version 2.x of the Azure Native provider, it used API version 2015-02-01-preview.
 */
export class WorkflowAccessKey extends pulumi.CustomResource {
    /**
     * Get an existing WorkflowAccessKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkflowAccessKey {
        return new WorkflowAccessKey(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:WorkflowAccessKey';

    /**
     * Returns true if the given object is an instance of WorkflowAccessKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkflowAccessKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkflowAccessKey.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets the workflow access key name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the not-after time.
     */
    public readonly notAfter!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the not-before time.
     */
    public readonly notBefore!: pulumi.Output<string | undefined>;
    /**
     * Gets the workflow access key type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkflowAccessKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkflowAccessKeyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workflowName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workflowName'");
            }
            resourceInputs["accessKeyName"] = args ? args.accessKeyName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["notAfter"] = args ? args.notAfter : undefined;
            resourceInputs["notBefore"] = args ? args.notBefore : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workflowName"] = args ? args.workflowName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notAfter"] = undefined /*out*/;
            resourceInputs["notBefore"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20150201preview:WorkflowAccessKey" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkflowAccessKey.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkflowAccessKey resource.
 */
export interface WorkflowAccessKeyArgs {
    /**
     * The workflow access key name.
     */
    accessKeyName?: pulumi.Input<string>;
    /**
     * Gets or sets the resource id.
     */
    id?: pulumi.Input<string>;
    /**
     * Gets or sets the not-after time.
     */
    notAfter?: pulumi.Input<string>;
    /**
     * Gets or sets the not-before time.
     */
    notBefore?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workflow name.
     */
    workflowName: pulumi.Input<string>;
}