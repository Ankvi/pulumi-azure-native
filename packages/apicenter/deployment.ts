import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * API deployment entity.
 *
 * Uses Azure REST API version 2024-03-15-preview. In version 2.x of the Azure Native provider, it used API version 2024-03-01.
 *
 * Other available API versions: 2024-03-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apicenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Deployment extends pulumi.CustomResource {
    /**
     * Get an existing Deployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Deployment {
        return new Deployment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apicenter:Deployment';

    /**
     * Returns true if the given object is an instance of Deployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Deployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Deployment.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The custom metadata defined for API catalog entities.
     */
    public readonly customProperties!: pulumi.Output<any | undefined>;
    /**
     * API center-scoped definition resource ID.
     */
    public readonly definitionId!: pulumi.Output<string | undefined>;
    /**
     * Description of the deployment.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * API center-scoped environment resource ID.
     */
    public readonly environmentId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The deployment server
     */
    public readonly server!: pulumi.Output<types.outputs.DeploymentServerResponse | undefined>;
    /**
     * State of API deployment.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * API deployment title
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Deployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["apiName"] = args ? args.apiName : undefined;
            resourceInputs["customProperties"] = args ? args.customProperties : undefined;
            resourceInputs["definitionId"] = args ? args.definitionId : undefined;
            resourceInputs["deploymentName"] = args ? args.deploymentName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["customProperties"] = undefined /*out*/;
            resourceInputs["definitionId"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["environmentId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["server"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apicenter/v20240301:Deployment" }, { type: "azure-native:apicenter/v20240315preview:Deployment" }, { type: "azure-native:apicenter/v20240601preview:Deployment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Deployment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Deployment resource.
 */
export interface DeploymentArgs {
    /**
     * The name of the API.
     */
    apiName: pulumi.Input<string>;
    /**
     * The custom metadata defined for API catalog entities.
     */
    customProperties?: any;
    /**
     * API center-scoped definition resource ID.
     */
    definitionId?: pulumi.Input<string>;
    /**
     * The name of the API deployment.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * Description of the deployment.
     */
    description?: pulumi.Input<string>;
    /**
     * API center-scoped environment resource ID.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The deployment server
     */
    server?: pulumi.Input<types.inputs.DeploymentServerArgs>;
    /**
     * The name of Azure API Center service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * State of API deployment.
     */
    state?: pulumi.Input<string | types.enums.DeploymentState>;
    /**
     * API deployment title
     */
    title?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}