import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Information about managed application definition.
 *
 * Uses Azure REST API version 2021-07-01. In version 2.x of the Azure Native provider, it used API version 2021-07-01.
 *
 * Other available API versions: 2023-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native solutions [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ApplicationDefinition extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApplicationDefinition {
        return new ApplicationDefinition(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:solutions:ApplicationDefinition';

    /**
     * Returns true if the given object is an instance of ApplicationDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationDefinition.__pulumiType;
    }

    /**
     * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
     */
    public readonly artifacts!: pulumi.Output<types.outputs.ApplicationDefinitionArtifactResponse[] | undefined>;
    /**
     * The managed application provider authorizations.
     */
    public readonly authorizations!: pulumi.Output<types.outputs.ApplicationAuthorizationResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
     */
    public readonly createUiDefinition!: pulumi.Output<any | undefined>;
    /**
     * The managed application deployment policy.
     */
    public readonly deploymentPolicy!: pulumi.Output<types.outputs.ApplicationDeploymentPolicyResponse | undefined>;
    /**
     * The managed application definition description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The managed application definition display name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * A value indicating whether the package is enabled or not.
     */
    public readonly isEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The managed application lock level.
     */
    public readonly lockLevel!: pulumi.Output<string>;
    /**
     * The managed application locking policy.
     */
    public readonly lockingPolicy!: pulumi.Output<types.outputs.ApplicationPackageLockingPolicyDefinitionResponse | undefined>;
    /**
     * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
     */
    public readonly mainTemplate!: pulumi.Output<any | undefined>;
    /**
     * ID of the resource that manages this resource.
     */
    public readonly managedBy!: pulumi.Output<string | undefined>;
    /**
     * The managed application management policy that determines publisher's access to the managed resource group.
     */
    public readonly managementPolicy!: pulumi.Output<types.outputs.ApplicationManagementPolicyResponse | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The managed application notification policy.
     */
    public readonly notificationPolicy!: pulumi.Output<types.outputs.ApplicationNotificationPolicyResponse | undefined>;
    /**
     * The managed application definition package file Uri. Use this element
     */
    public readonly packageFileUri!: pulumi.Output<string | undefined>;
    /**
     * The managed application provider policies.
     */
    public readonly policies!: pulumi.Output<types.outputs.ApplicationPolicyResponse[] | undefined>;
    /**
     * The SKU of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * The storage account id for bring your own storage scenario.
     */
    public readonly storageAccountId!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ApplicationDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationDefinitionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.lockLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lockLevel'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationDefinitionName"] = args ? args.applicationDefinitionName : undefined;
            resourceInputs["artifacts"] = args ? args.artifacts : undefined;
            resourceInputs["authorizations"] = args ? args.authorizations : undefined;
            resourceInputs["createUiDefinition"] = args ? args.createUiDefinition : undefined;
            resourceInputs["deploymentPolicy"] = args ? args.deploymentPolicy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["lockLevel"] = args ? args.lockLevel : undefined;
            resourceInputs["lockingPolicy"] = args ? args.lockingPolicy : undefined;
            resourceInputs["mainTemplate"] = args ? args.mainTemplate : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["managementPolicy"] = args ? args.managementPolicy : undefined;
            resourceInputs["notificationPolicy"] = args ? args.notificationPolicy : undefined;
            resourceInputs["packageFileUri"] = args ? args.packageFileUri : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["artifacts"] = undefined /*out*/;
            resourceInputs["authorizations"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createUiDefinition"] = undefined /*out*/;
            resourceInputs["deploymentPolicy"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["lockLevel"] = undefined /*out*/;
            resourceInputs["lockingPolicy"] = undefined /*out*/;
            resourceInputs["mainTemplate"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["managementPolicy"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationPolicy"] = undefined /*out*/;
            resourceInputs["packageFileUri"] = undefined /*out*/;
            resourceInputs["policies"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["storageAccountId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:solutions/v20160901preview:ApplicationDefinition" }, { type: "azure-native:solutions/v20170901:ApplicationDefinition" }, { type: "azure-native:solutions/v20171201:ApplicationDefinition" }, { type: "azure-native:solutions/v20180201:ApplicationDefinition" }, { type: "azure-native:solutions/v20180301:ApplicationDefinition" }, { type: "azure-native:solutions/v20180601:ApplicationDefinition" }, { type: "azure-native:solutions/v20180901preview:ApplicationDefinition" }, { type: "azure-native:solutions/v20190701:ApplicationDefinition" }, { type: "azure-native:solutions/v20200821preview:ApplicationDefinition" }, { type: "azure-native:solutions/v20210201preview:ApplicationDefinition" }, { type: "azure-native:solutions/v20210701:ApplicationDefinition" }, { type: "azure-native:solutions/v20231201preview:ApplicationDefinition" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApplicationDefinition.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApplicationDefinition resource.
 */
export interface ApplicationDefinitionArgs {
    /**
     * The name of the managed application definition.
     */
    applicationDefinitionName?: pulumi.Input<string>;
    /**
     * The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition.
     */
    artifacts?: pulumi.Input<pulumi.Input<types.inputs.ApplicationDefinitionArtifactArgs>[]>;
    /**
     * The managed application provider authorizations.
     */
    authorizations?: pulumi.Input<pulumi.Input<types.inputs.ApplicationAuthorizationArgs>[]>;
    /**
     * The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string.
     */
    createUiDefinition?: any;
    /**
     * The managed application deployment policy.
     */
    deploymentPolicy?: pulumi.Input<types.inputs.ApplicationDeploymentPolicyArgs>;
    /**
     * The managed application definition description.
     */
    description?: pulumi.Input<string>;
    /**
     * The managed application definition display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * A value indicating whether the package is enabled or not.
     */
    isEnabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The managed application lock level.
     */
    lockLevel: pulumi.Input<types.enums.ApplicationLockLevel>;
    /**
     * The managed application locking policy.
     */
    lockingPolicy?: pulumi.Input<types.inputs.ApplicationPackageLockingPolicyDefinitionArgs>;
    /**
     * The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string.
     */
    mainTemplate?: any;
    /**
     * ID of the resource that manages this resource.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * The managed application management policy that determines publisher's access to the managed resource group.
     */
    managementPolicy?: pulumi.Input<types.inputs.ApplicationManagementPolicyArgs>;
    /**
     * The managed application notification policy.
     */
    notificationPolicy?: pulumi.Input<types.inputs.ApplicationNotificationPolicyArgs>;
    /**
     * The managed application definition package file Uri. Use this element
     */
    packageFileUri?: pulumi.Input<string>;
    /**
     * The managed application provider policies.
     */
    policies?: pulumi.Input<pulumi.Input<types.inputs.ApplicationPolicyArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The storage account id for bring your own storage scenario.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}