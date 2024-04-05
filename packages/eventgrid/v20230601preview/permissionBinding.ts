import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Permission binding resource.
 */
export class PermissionBinding extends pulumi.CustomResource {
    /**
     * Get an existing PermissionBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PermissionBinding {
        return new PermissionBinding(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid/v20230601preview:PermissionBinding';

    /**
     * Returns true if the given object is an instance of PermissionBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PermissionBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PermissionBinding.__pulumiType;
    }

    /**
     * The name of the client group resource that the permission is bound to.
     * The client group needs to be a resource under the same namespace the permission binding is a part of.
     */
    public readonly clientGroupName!: pulumi.Output<string | undefined>;
    /**
     * Description for the Permission Binding resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The allowed permission.
     */
    public readonly permission!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the PermissionBinding resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata relating to the PermissionBinding resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The name of the Topic Space resource that the permission is bound to.
     * The Topic space needs to be a resource under the same namespace the permission binding is a part of.
     */
    public readonly topicSpaceName!: pulumi.Output<string | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PermissionBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionBindingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clientGroupName"] = args ? args.clientGroupName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["permission"] = args ? args.permission : undefined;
            resourceInputs["permissionBindingName"] = args ? args.permissionBindingName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["topicSpaceName"] = args ? args.topicSpaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["clientGroupName"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["permission"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topicSpaceName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid:PermissionBinding" }, { type: "azure-native:eventgrid/v20231215preview:PermissionBinding" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PermissionBinding.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PermissionBinding resource.
 */
export interface PermissionBindingArgs {
    /**
     * The name of the client group resource that the permission is bound to.
     * The client group needs to be a resource under the same namespace the permission binding is a part of.
     */
    clientGroupName?: pulumi.Input<string>;
    /**
     * Description for the Permission Binding resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The allowed permission.
     */
    permission?: pulumi.Input<string | types.enums.PermissionType>;
    /**
     * The permission binding name.
     */
    permissionBindingName?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Topic Space resource that the permission is bound to.
     * The Topic space needs to be a resource under the same namespace the permission binding is a part of.
     */
    topicSpaceName?: pulumi.Input<string>;
}