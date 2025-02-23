import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class representing a Domains resource.
 * Azure REST API version: 2023-03-31. Prior API version in Azure Native 1.x: 2021-10-01-preview.
 *
 * Other available API versions: 2022-07-01-preview, 2023-04-01, 2023-04-01-preview, 2023-06-01-preview, 2024-09-01-preview.
 *
 * Note: If `domainManagement` is set to `AzureManaged`, then `domainName` is required.
 */
export class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Domain {
        return new Domain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:communication:Domain';

    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Domain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Domain.__pulumiType;
    }

    /**
     * The location where the Domains resource data is stored at rest.
     */
    public /*out*/ readonly dataLocation!: pulumi.Output<string>;
    /**
     * Describes how a Domains resource is being managed.
     */
    public readonly domainManagement!: pulumi.Output<string>;
    /**
     * P2 sender domain that is displayed to the email recipients [RFC 5322].
     */
    public /*out*/ readonly fromSenderDomain!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * P1 sender domain that is present on the email envelope [RFC 5321].
     */
    public /*out*/ readonly mailFromSenderDomain!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Describes whether user engagement tracking is enabled or disabled.
     */
    public readonly userEngagementTracking!: pulumi.Output<string | undefined>;
    /**
     * List of DnsRecord
     */
    public /*out*/ readonly verificationRecords!: pulumi.Output<types.outputs.DomainPropertiesResponseVerificationRecords>;
    /**
     * List of VerificationStatusRecord
     */
    public /*out*/ readonly verificationStates!: pulumi.Output<types.outputs.DomainPropertiesResponseVerificationStates>;

    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainManagement === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainManagement'");
            }
            if ((!args || args.emailServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailServiceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["domainManagement"] = args ? args.domainManagement : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["emailServiceName"] = args ? args.emailServiceName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userEngagementTracking"] = args ? args.userEngagementTracking : undefined;
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["fromSenderDomain"] = undefined /*out*/;
            resourceInputs["mailFromSenderDomain"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["verificationRecords"] = undefined /*out*/;
            resourceInputs["verificationStates"] = undefined /*out*/;
        } else {
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["domainManagement"] = undefined /*out*/;
            resourceInputs["fromSenderDomain"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mailFromSenderDomain"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEngagementTracking"] = undefined /*out*/;
            resourceInputs["verificationRecords"] = undefined /*out*/;
            resourceInputs["verificationStates"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:communication/v20211001preview:Domain" }, { type: "azure-native:communication/v20220701preview:Domain" }, { type: "azure-native:communication/v20230301preview:Domain" }, { type: "azure-native:communication/v20230331:Domain" }, { type: "azure-native:communication/v20230401:Domain" }, { type: "azure-native:communication/v20230401preview:Domain" }, { type: "azure-native:communication/v20230601preview:Domain" }, { type: "azure-native:communication/v20240901preview:Domain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Domain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    /**
     * Describes how a Domains resource is being managed.
     */
    domainManagement: pulumi.Input<string | types.enums.DomainManagement>;
    /**
     * The name of the Domains resource.
     */
    domainName?: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Describes whether user engagement tracking is enabled or disabled.
     */
    userEngagementTracking?: pulumi.Input<string | types.enums.UserEngagementTracking>;
}