import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Schema for MSIX Package properties.
 */
export class MSIXPackage extends pulumi.CustomResource {
    /**
     * Get an existing MSIXPackage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MSIXPackage {
        return new MSIXPackage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization/v20221014preview:MSIXPackage';

    /**
     * Returns true if the given object is an instance of MSIXPackage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MSIXPackage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MSIXPackage.__pulumiType;
    }

    /**
     * User friendly Name to be displayed in the portal. 
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * VHD/CIM image path on Network Share.
     */
    public readonly imagePath!: pulumi.Output<string | undefined>;
    /**
     * Make this version of the package the active one across the hostpool. 
     */
    public readonly isActive!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies how to register Package in feed.
     */
    public readonly isRegularRegistration!: pulumi.Output<boolean | undefined>;
    /**
     * Date Package was last updated, found in the appxmanifest.xml. 
     */
    public readonly lastUpdated!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of package applications. 
     */
    public readonly packageApplications!: pulumi.Output<types.outputs.MsixPackageApplicationsResponse[] | undefined>;
    /**
     * List of package dependencies. 
     */
    public readonly packageDependencies!: pulumi.Output<types.outputs.MsixPackageDependenciesResponse[] | undefined>;
    /**
     * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
     */
    public readonly packageFamilyName!: pulumi.Output<string | undefined>;
    /**
     * Package Name from appxmanifest.xml. 
     */
    public readonly packageName!: pulumi.Output<string | undefined>;
    /**
     * Relative Path to the package inside the image. 
     */
    public readonly packageRelativePath!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Package Version found in the appxmanifest.xml. 
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a MSIXPackage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MSIXPackageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.hostPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostPoolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["hostPoolName"] = args ? args.hostPoolName : undefined;
            resourceInputs["imagePath"] = args ? args.imagePath : undefined;
            resourceInputs["isActive"] = args ? args.isActive : undefined;
            resourceInputs["isRegularRegistration"] = args ? args.isRegularRegistration : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["msixPackageFullName"] = args ? args.msixPackageFullName : undefined;
            resourceInputs["packageApplications"] = args ? args.packageApplications : undefined;
            resourceInputs["packageDependencies"] = args ? args.packageDependencies : undefined;
            resourceInputs["packageFamilyName"] = args ? args.packageFamilyName : undefined;
            resourceInputs["packageName"] = args ? args.packageName : undefined;
            resourceInputs["packageRelativePath"] = args ? args.packageRelativePath : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["imagePath"] = undefined /*out*/;
            resourceInputs["isActive"] = undefined /*out*/;
            resourceInputs["isRegularRegistration"] = undefined /*out*/;
            resourceInputs["lastUpdated"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageApplications"] = undefined /*out*/;
            resourceInputs["packageDependencies"] = undefined /*out*/;
            resourceInputs["packageFamilyName"] = undefined /*out*/;
            resourceInputs["packageName"] = undefined /*out*/;
            resourceInputs["packageRelativePath"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20200921preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20201019preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20201102preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20201110preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20210114preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20210201preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20210309preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20210401preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20210712:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20210903preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20220210preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20220401preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20220909:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20230707preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20230905:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20231004preview:MSIXPackage" }, { type: "azure-native:desktopvirtualization/v20231101preview:MSIXPackage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MSIXPackage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MSIXPackage resource.
 */
export interface MSIXPackageArgs {
    /**
     * User friendly Name to be displayed in the portal. 
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName: pulumi.Input<string>;
    /**
     * VHD/CIM image path on Network Share.
     */
    imagePath?: pulumi.Input<string>;
    /**
     * Make this version of the package the active one across the hostpool. 
     */
    isActive?: pulumi.Input<boolean>;
    /**
     * Specifies how to register Package in feed.
     */
    isRegularRegistration?: pulumi.Input<boolean>;
    /**
     * Date Package was last updated, found in the appxmanifest.xml. 
     */
    lastUpdated?: pulumi.Input<string>;
    /**
     * The version specific package full name of the MSIX package within specified hostpool
     */
    msixPackageFullName?: pulumi.Input<string>;
    /**
     * List of package applications. 
     */
    packageApplications?: pulumi.Input<pulumi.Input<types.inputs.MsixPackageApplicationsArgs>[]>;
    /**
     * List of package dependencies. 
     */
    packageDependencies?: pulumi.Input<pulumi.Input<types.inputs.MsixPackageDependenciesArgs>[]>;
    /**
     * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
     */
    packageFamilyName?: pulumi.Input<string>;
    /**
     * Package Name from appxmanifest.xml. 
     */
    packageName?: pulumi.Input<string>;
    /**
     * Relative Path to the package inside the image. 
     */
    packageRelativePath?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Package Version found in the appxmanifest.xml. 
     */
    version?: pulumi.Input<string>;
}
