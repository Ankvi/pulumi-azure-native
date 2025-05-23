import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Linked workspace.
 *
 * Uses Azure REST API version 2020-05-15-preview. In version 2.x of the Azure Native provider, it used API version 2020-05-15-preview.
 *
 * Other available API versions: 2020-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class LinkedWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing LinkedWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LinkedWorkspace {
        return new LinkedWorkspace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:LinkedWorkspace';

    /**
     * Returns true if the given object is an instance of LinkedWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LinkedWorkspace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LinkedWorkspace.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Friendly name of the linked workspace.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * LinkedWorkspace specific properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.LinkedWorkspacePropsResponse>;
    /**
     * Resource type of linked workspace.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LinkedWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedWorkspaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["linkName"] = args ? args.linkName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20200501preview:LinkedWorkspace" }, { type: "azure-native:machinelearningservices/v20200515preview:LinkedWorkspace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LinkedWorkspace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LinkedWorkspace resource.
 */
export interface LinkedWorkspaceArgs {
    /**
     * Friendly name of the linked workspace
     */
    linkName?: pulumi.Input<string>;
    /**
     * Friendly name of the linked workspace
     */
    name?: pulumi.Input<string>;
    /**
     * LinkedWorkspace specific properties.
     */
    properties?: pulumi.Input<types.inputs.LinkedWorkspacePropsArgs>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}