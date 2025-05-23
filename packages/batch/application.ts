import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Contains information about an application in a Batch account.
 *
 * Uses Azure REST API version 2024-07-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native batch [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:batch:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * A value indicating whether packages within the application may be overwritten using the same version string.
     */
    public readonly allowUpdates!: pulumi.Output<boolean | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    public readonly defaultVersion!: pulumi.Output<string | undefined>;
    /**
     * The display name for the application.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The ETag of the resource, used for concurrency statements.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["allowUpdates"] = args ? args.allowUpdates : undefined;
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["defaultVersion"] = args ? args.defaultVersion : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowUpdates"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["defaultVersion"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:batch/v20151201:Application" }, { type: "azure-native:batch/v20170101:Application" }, { type: "azure-native:batch/v20170501:Application" }, { type: "azure-native:batch/v20170901:Application" }, { type: "azure-native:batch/v20181201:Application" }, { type: "azure-native:batch/v20190401:Application" }, { type: "azure-native:batch/v20190801:Application" }, { type: "azure-native:batch/v20200301:Application" }, { type: "azure-native:batch/v20200501:Application" }, { type: "azure-native:batch/v20200901:Application" }, { type: "azure-native:batch/v20210101:Application" }, { type: "azure-native:batch/v20210601:Application" }, { type: "azure-native:batch/v20220101:Application" }, { type: "azure-native:batch/v20220601:Application" }, { type: "azure-native:batch/v20221001:Application" }, { type: "azure-native:batch/v20230501:Application" }, { type: "azure-native:batch/v20231101:Application" }, { type: "azure-native:batch/v20240201:Application" }, { type: "azure-native:batch/v20240701:Application" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Application.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string.
     */
    allowUpdates?: pulumi.Input<boolean>;
    /**
     * The name of the application. This must be unique within the account.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    defaultVersion?: pulumi.Input<string>;
    /**
     * The display name for the application.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}