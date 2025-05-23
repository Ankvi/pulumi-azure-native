import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a SourceControl in Azure Security Insights.
 *
 * Uses Azure REST API version 2023-05-01-preview. In version 2.x of the Azure Native provider, it used API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class SourceControl extends pulumi.CustomResource {
    /**
     * Get an existing SourceControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SourceControl {
        return new SourceControl(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:SourceControl';

    /**
     * Returns true if the given object is an instance of SourceControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SourceControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SourceControl.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Array of source control content types.
     */
    public readonly contentTypes!: pulumi.Output<string[]>;
    /**
     * A description of the source control
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of the source control
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Information regarding the latest deployment for the source control.
     */
    public readonly lastDeploymentInfo!: pulumi.Output<types.outputs.DeploymentInfoResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The repository type of the source control
     */
    public readonly repoType!: pulumi.Output<string>;
    /**
     * Repository metadata.
     */
    public readonly repository!: pulumi.Output<types.outputs.RepositoryResponse>;
    /**
     * Information regarding the resources created in user's repository.
     */
    public readonly repositoryResourceInfo!: pulumi.Output<types.outputs.RepositoryResourceInfoResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The version number associated with the source control
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a SourceControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceControlArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contentTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contentTypes'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.repoType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repoType'");
            }
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["contentTypes"] = args ? args.contentTypes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["lastDeploymentInfo"] = args ? args.lastDeploymentInfo : undefined;
            resourceInputs["repoType"] = args ? args.repoType : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["repositoryResourceInfo"] = args ? args.repositoryResourceInfo : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceControlId"] = args ? args.sourceControlId : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contentTypes"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastDeploymentInfo"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["repoType"] = undefined /*out*/;
            resourceInputs["repository"] = undefined /*out*/;
            resourceInputs["repositoryResourceInfo"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20210301preview:SourceControl" }, { type: "azure-native:securityinsights/v20210901preview:SourceControl" }, { type: "azure-native:securityinsights/v20211001preview:SourceControl" }, { type: "azure-native:securityinsights/v20220101preview:SourceControl" }, { type: "azure-native:securityinsights/v20220401preview:SourceControl" }, { type: "azure-native:securityinsights/v20220501preview:SourceControl" }, { type: "azure-native:securityinsights/v20220601preview:SourceControl" }, { type: "azure-native:securityinsights/v20220701preview:SourceControl" }, { type: "azure-native:securityinsights/v20220801preview:SourceControl" }, { type: "azure-native:securityinsights/v20220901preview:SourceControl" }, { type: "azure-native:securityinsights/v20221001preview:SourceControl" }, { type: "azure-native:securityinsights/v20221101preview:SourceControl" }, { type: "azure-native:securityinsights/v20221201preview:SourceControl" }, { type: "azure-native:securityinsights/v20230201preview:SourceControl" }, { type: "azure-native:securityinsights/v20230301preview:SourceControl" }, { type: "azure-native:securityinsights/v20230401preview:SourceControl" }, { type: "azure-native:securityinsights/v20230501preview:SourceControl" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SourceControl.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SourceControl resource.
 */
export interface SourceControlArgs {
    /**
     * Array of source control content types.
     */
    contentTypes: pulumi.Input<pulumi.Input<string | types.enums.ContentType>[]>;
    /**
     * A description of the source control
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the source control
     */
    displayName: pulumi.Input<string>;
    /**
     * The id (a Guid) of the source control
     */
    id?: pulumi.Input<string>;
    /**
     * Information regarding the latest deployment for the source control.
     */
    lastDeploymentInfo?: pulumi.Input<types.inputs.DeploymentInfoArgs>;
    /**
     * The repository type of the source control
     */
    repoType: pulumi.Input<string | types.enums.RepoType>;
    /**
     * Repository metadata.
     */
    repository: pulumi.Input<types.inputs.RepositoryArgs>;
    /**
     * Information regarding the resources created in user's repository.
     */
    repositoryResourceInfo?: pulumi.Input<types.inputs.RepositoryResourceInfoArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source control Id
     */
    sourceControlId?: pulumi.Input<string>;
    /**
     * The version number associated with the source control
     */
    version?: pulumi.Input<string | types.enums.Version>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}