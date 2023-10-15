import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Workspace connection.
 */
export class WorkspaceConnection extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkspaceConnection {
        return new WorkspaceConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20210401:WorkspaceConnection';

    /**
     * Returns true if the given object is an instance of WorkspaceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspaceConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspaceConnection.__pulumiType;
    }

    /**
     * Authorization type of the workspace connection.
     */
    public readonly authType!: pulumi.Output<string | undefined>;
    /**
     * Category of the workspace connection.
     */
    public readonly category!: pulumi.Output<string | undefined>;
    /**
     * Friendly name of the workspace connection.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Target of the workspace connection.
     */
    public readonly target!: pulumi.Output<string | undefined>;
    /**
     * Resource type of workspace connection.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Value details of the workspace connection.
     */
    public readonly value!: pulumi.Output<string | undefined>;
    /**
     * format for the workspace connection value
     */
    public readonly valueFormat!: pulumi.Output<string | undefined>;

    /**
     * Create a WorkspaceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["authType"] = args ? args.authType : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["valueFormat"] = args ? args.valueFormat : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authType"] = undefined /*out*/;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["target"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["value"] = undefined /*out*/;
            resourceInputs["valueFormat"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20200601:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20200801:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20200901preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20210101:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20210301preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20210701:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220101preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220201preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220501:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220601preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20221001:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20221001preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20221201preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230201preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230401:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230401preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230601preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230801preview:WorkspaceConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceConnection resource.
 */
export interface WorkspaceConnectionArgs {
    /**
     * Authorization type of the workspace connection.
     */
    authType?: pulumi.Input<string>;
    /**
     * Category of the workspace connection.
     */
    category?: pulumi.Input<string>;
    /**
     * Friendly name of the workspace connection
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Friendly name of the workspace connection
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Target of the workspace connection.
     */
    target?: pulumi.Input<string>;
    /**
     * Value details of the workspace connection.
     */
    value?: pulumi.Input<string>;
    /**
     * format for the workspace connection value
     */
    valueFormat?: pulumi.Input<string | types.enums.ValueFormat>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
