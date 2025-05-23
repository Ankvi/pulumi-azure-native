import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Configures where to store the OMS agent data for workspaces under a scope
 *
 * Uses Azure REST API version 2017-08-01-preview. In version 2.x of the Azure Native provider, it used API version 2017-08-01-preview.
 */
export class WorkspaceSetting extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceSetting {
        return new WorkspaceSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:WorkspaceSetting';

    /**
     * Returns true if the given object is an instance of WorkspaceSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceSetting.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
     */
    public readonly scope!: pulumi.Output<string>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The full Azure ID of the workspace to save the data in
     */
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a WorkspaceSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["workspaceSettingName"] = args ? args.workspaceSettingName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20170801preview:WorkspaceSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceSetting resource.
 */
export interface WorkspaceSettingArgs {
    /**
     * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
     */
    scope: pulumi.Input<string>;
    /**
     * The full Azure ID of the workspace to save the data in
     */
    workspaceId: pulumi.Input<string>;
    /**
     * Name of the security setting
     */
    workspaceSettingName?: pulumi.Input<string>;
}