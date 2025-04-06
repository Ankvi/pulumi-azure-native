import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource representation of a IacProfile.
 *
 * Uses Azure REST API version 2024-05-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-05-01-preview.
 *
 * Other available API versions: 2024-08-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class IacProfile extends pulumi.CustomResource {
    /**
     * Get an existing IacProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IacProfile {
        return new IacProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devhub:IacProfile';

    /**
     * Returns true if the given object is an instance of IacProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IacProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IacProfile.__pulumiType;
    }

    /**
     * Determines the authorization status of requests.
     */
    public /*out*/ readonly authStatus!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Repository Branch Name
     */
    public readonly branchName!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the Pull Request submitted against the users repository.
     */
    public /*out*/ readonly prStatus!: pulumi.Output<string>;
    /**
     * The number associated with the submitted pull request.
     */
    public /*out*/ readonly pullNumber!: pulumi.Output<number>;
    /**
     * Repository Main Branch
     */
    public readonly repositoryMainBranch!: pulumi.Output<string | undefined>;
    /**
     * Repository Name
     */
    public readonly repositoryName!: pulumi.Output<string | undefined>;
    /**
     * Repository Owner
     */
    public readonly repositoryOwner!: pulumi.Output<string | undefined>;
    public readonly stages!: pulumi.Output<types.outputs.StagePropertiesResponse[] | undefined>;
    /**
     * Terraform Storage Account Name
     */
    public readonly storageAccountName!: pulumi.Output<string | undefined>;
    /**
     * Terraform Storage Account Resource Group
     */
    public readonly storageAccountResourceGroup!: pulumi.Output<string | undefined>;
    /**
     * Terraform Storage Account Subscription
     */
    public readonly storageAccountSubscription!: pulumi.Output<string | undefined>;
    /**
     * Terraform Container Name
     */
    public readonly storageContainerName!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly templates!: pulumi.Output<types.outputs.IacTemplatePropertiesResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IacProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IacProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["branchName"] = args ? args.branchName : undefined;
            resourceInputs["iacProfileName"] = args ? args.iacProfileName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["repositoryMainBranch"] = args ? args.repositoryMainBranch : undefined;
            resourceInputs["repositoryName"] = args ? args.repositoryName : undefined;
            resourceInputs["repositoryOwner"] = args ? args.repositoryOwner : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["stages"] = args ? args.stages : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["storageAccountResourceGroup"] = args ? args.storageAccountResourceGroup : undefined;
            resourceInputs["storageAccountSubscription"] = args ? args.storageAccountSubscription : undefined;
            resourceInputs["storageContainerName"] = args ? args.storageContainerName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templates"] = args ? args.templates : undefined;
            resourceInputs["authStatus"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["prStatus"] = undefined /*out*/;
            resourceInputs["pullNumber"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authStatus"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["branchName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["prStatus"] = undefined /*out*/;
            resourceInputs["pullNumber"] = undefined /*out*/;
            resourceInputs["repositoryMainBranch"] = undefined /*out*/;
            resourceInputs["repositoryName"] = undefined /*out*/;
            resourceInputs["repositoryOwner"] = undefined /*out*/;
            resourceInputs["stages"] = undefined /*out*/;
            resourceInputs["storageAccountName"] = undefined /*out*/;
            resourceInputs["storageAccountResourceGroup"] = undefined /*out*/;
            resourceInputs["storageAccountSubscription"] = undefined /*out*/;
            resourceInputs["storageContainerName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["templates"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devhub/v20240501preview:IacProfile" }, { type: "azure-native:devhub/v20240801preview:IacProfile" }, { type: "azure-native:devhub/v20250301preview:IacProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IacProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IacProfile resource.
 */
export interface IacProfileArgs {
    /**
     * Repository Branch Name
     */
    branchName?: pulumi.Input<string>;
    /**
     * The name of the IacProfile.
     */
    iacProfileName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Repository Main Branch
     */
    repositoryMainBranch?: pulumi.Input<string>;
    /**
     * Repository Name
     */
    repositoryName?: pulumi.Input<string>;
    /**
     * Repository Owner
     */
    repositoryOwner?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    stages?: pulumi.Input<pulumi.Input<types.inputs.StagePropertiesArgs>[]>;
    /**
     * Terraform Storage Account Name
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * Terraform Storage Account Resource Group
     */
    storageAccountResourceGroup?: pulumi.Input<string>;
    /**
     * Terraform Storage Account Subscription
     */
    storageAccountSubscription?: pulumi.Input<string>;
    /**
     * Terraform Container Name
     */
    storageContainerName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    templates?: pulumi.Input<pulumi.Input<types.inputs.IacTemplatePropertiesArgs>[]>;
}