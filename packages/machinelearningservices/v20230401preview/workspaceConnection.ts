import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
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
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230401preview:WorkspaceConnection';

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
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<types.outputs.AccessKeyAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.ManagedIdentityAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.NoneAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.PATAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.SASAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.ServicePrincipalAuthTypeWorkspaceConnectionPropertiesResponse | types.outputs.UsernamePasswordAuthTypeWorkspaceConnectionPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20200601:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20200801:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20200901preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20210101:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20210301preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20210401:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20210701:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220101preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220201preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220501:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20220601preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20221001:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20221001preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20221201preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230201preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230401:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230601preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20230801preview:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20231001:WorkspaceConnection" }, { type: "azure-native:machinelearningservices/v20240101preview:WorkspaceConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkspaceConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkspaceConnection resource.
 */
export interface WorkspaceConnectionArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName?: pulumi.Input<string>;
    properties: pulumi.Input<types.inputs.AccessKeyAuthTypeWorkspaceConnectionPropertiesArgs | types.inputs.ManagedIdentityAuthTypeWorkspaceConnectionPropertiesArgs | types.inputs.NoneAuthTypeWorkspaceConnectionPropertiesArgs | types.inputs.PATAuthTypeWorkspaceConnectionPropertiesArgs | types.inputs.SASAuthTypeWorkspaceConnectionPropertiesArgs | types.inputs.ServicePrincipalAuthTypeWorkspaceConnectionPropertiesArgs | types.inputs.UsernamePasswordAuthTypeWorkspaceConnectionPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}