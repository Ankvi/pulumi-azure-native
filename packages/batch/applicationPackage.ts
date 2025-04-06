import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * An application package which represents a particular version of an application.
 *
 * Uses Azure REST API version 2024-07-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native batch [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApplicationPackage extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationPackage {
        return new ApplicationPackage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:batch:ApplicationPackage';

    /**
     * Returns true if the given object is an instance of ApplicationPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationPackage.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The format of the application package, if the package is active.
     */
    public /*out*/ readonly format!: pulumi.Output<string>;
    /**
     * The time at which the package was last activated, if the package is active.
     */
    public /*out*/ readonly lastActivationTime!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current state of the application package.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The URL for the application package in Azure Storage.
     */
    public /*out*/ readonly storageUrl!: pulumi.Output<string>;
    /**
     * The UTC time at which the Azure Storage URL will expire.
     */
    public /*out*/ readonly storageUrlExpiry!: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApplicationPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationPackageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.applicationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionName"] = args ? args.versionName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["lastActivationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageUrl"] = undefined /*out*/;
            resourceInputs["storageUrlExpiry"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["lastActivationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageUrl"] = undefined /*out*/;
            resourceInputs["storageUrlExpiry"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:batch/v20151201:ApplicationPackage" }, { type: "azure-native:batch/v20170101:ApplicationPackage" }, { type: "azure-native:batch/v20170501:ApplicationPackage" }, { type: "azure-native:batch/v20170901:ApplicationPackage" }, { type: "azure-native:batch/v20181201:ApplicationPackage" }, { type: "azure-native:batch/v20190401:ApplicationPackage" }, { type: "azure-native:batch/v20190801:ApplicationPackage" }, { type: "azure-native:batch/v20200301:ApplicationPackage" }, { type: "azure-native:batch/v20200501:ApplicationPackage" }, { type: "azure-native:batch/v20200901:ApplicationPackage" }, { type: "azure-native:batch/v20210101:ApplicationPackage" }, { type: "azure-native:batch/v20210601:ApplicationPackage" }, { type: "azure-native:batch/v20220101:ApplicationPackage" }, { type: "azure-native:batch/v20220601:ApplicationPackage" }, { type: "azure-native:batch/v20221001:ApplicationPackage" }, { type: "azure-native:batch/v20230501:ApplicationPackage" }, { type: "azure-native:batch/v20231101:ApplicationPackage" }, { type: "azure-native:batch/v20240201:ApplicationPackage" }, { type: "azure-native:batch/v20240701:ApplicationPackage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApplicationPackage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationPackage resource.
 */
export interface ApplicationPackageArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the application. This must be unique within the account.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The version of the application.
     */
    versionName?: pulumi.Input<string>;
}