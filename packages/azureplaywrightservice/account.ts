import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Playwright service account resource.
 *
 * Uses Azure REST API version 2024-12-01. In version 2.x of the Azure Native provider, it used API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-10-01-preview, 2024-02-01-preview, 2024-08-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azureplaywrightservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azureplaywrightservice:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The Playwright testing dashboard URI for the account resource.
     */
    public /*out*/ readonly dashboardUri!: pulumi.Output<string>;
    /**
     * When enabled, this feature allows the workspace to use local auth (through service access token) for executing operations.
     */
    public readonly localAuth!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * This property sets the connection region for Playwright client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created.
     */
    public readonly regionalAffinity!: pulumi.Output<string | undefined>;
    /**
     * When enabled, this feature allows the workspace to upload and display test results, including artifacts like traces and screenshots, in the Playwright portal. This enables faster and more efficient troubleshooting.
     */
    public readonly reporting!: pulumi.Output<string | undefined>;
    /**
     * When enabled, Playwright client workers can connect to cloud-hosted browsers. This can increase the number of parallel workers for a test run, significantly minimizing test completion durations.
     */
    public readonly scalableExecution!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["localAuth"] = (args ? args.localAuth : undefined) ?? "Disabled";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["regionalAffinity"] = (args ? args.regionalAffinity : undefined) ?? "Enabled";
            resourceInputs["reporting"] = (args ? args.reporting : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scalableExecution"] = (args ? args.scalableExecution : undefined) ?? "Enabled";
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dashboardUri"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dashboardUri"] = undefined /*out*/;
            resourceInputs["localAuth"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["regionalAffinity"] = undefined /*out*/;
            resourceInputs["reporting"] = undefined /*out*/;
            resourceInputs["scalableExecution"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azureplaywrightservice/v20231001preview:Account" }, { type: "azure-native:azureplaywrightservice/v20240201preview:Account" }, { type: "azure-native:azureplaywrightservice/v20240801preview:Account" }, { type: "azure-native:azureplaywrightservice/v20241201:Account" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Account.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * Name of account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * When enabled, this feature allows the workspace to use local auth (through service access token) for executing operations.
     */
    localAuth?: pulumi.Input<string | types.enums.EnablementStatus>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * This property sets the connection region for Playwright client workers to cloud-hosted browsers. If enabled, workers connect to browsers in the closest Azure region, ensuring lower latency. If disabled, workers connect to browsers in the Azure region in which the workspace was initially created.
     */
    regionalAffinity?: pulumi.Input<string | types.enums.EnablementStatus>;
    /**
     * When enabled, this feature allows the workspace to upload and display test results, including artifacts like traces and screenshots, in the Playwright portal. This enables faster and more efficient troubleshooting.
     */
    reporting?: pulumi.Input<string | types.enums.EnablementStatus>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When enabled, Playwright client workers can connect to cloud-hosted browsers. This can increase the number of parallel workers for a test run, significantly minimizing test completion durations.
     */
    scalableExecution?: pulumi.Input<string | types.enums.EnablementStatus>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}