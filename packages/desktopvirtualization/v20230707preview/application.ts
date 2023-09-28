import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Schema for Application properties.
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
    public static readonly __pulumiType = 'azure-native:desktopvirtualization/v20230707preview:Application';

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
     * Resource Type of Application.
     */
    public readonly applicationType!: pulumi.Output<string | undefined>;
    /**
     * Command Line Arguments for Application.
     */
    public readonly commandLineArguments!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
     */
    public readonly commandLineSetting!: pulumi.Output<string>;
    /**
     * Description of Application.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies a path for the executable file for the application.
     */
    public readonly filePath!: pulumi.Output<string | undefined>;
    /**
     * Friendly name of Application.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * the icon a 64 bit string as a byte array.
     */
    public /*out*/ readonly iconContent!: pulumi.Output<string>;
    /**
     * Hash of the icon.
     */
    public /*out*/ readonly iconHash!: pulumi.Output<string>;
    /**
     * Index of the icon.
     */
    public readonly iconIndex!: pulumi.Output<number | undefined>;
    /**
     * Path to icon.
     */
    public readonly iconPath!: pulumi.Output<string | undefined>;
    /**
     * Specifies the package application Id for MSIX applications
     */
    public readonly msixPackageApplicationId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the package family name for MSIX applications
     */
    public readonly msixPackageFamilyName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ObjectId of Application. (internal use)
     */
    public /*out*/ readonly objectId!: pulumi.Output<string>;
    /**
     * Specifies whether to show the RemoteApp program in the RD Web Access server.
     */
    public readonly showInPortal!: pulumi.Output<boolean | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            if ((!args || args.applicationGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationGroupName'");
            }
            if ((!args || args.commandLineSetting === undefined) && !opts.urn) {
                throw new Error("Missing required property 'commandLineSetting'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationGroupName"] = args ? args.applicationGroupName : undefined;
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["applicationType"] = args ? args.applicationType : undefined;
            resourceInputs["commandLineArguments"] = args ? args.commandLineArguments : undefined;
            resourceInputs["commandLineSetting"] = args ? args.commandLineSetting : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["filePath"] = args ? args.filePath : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["iconIndex"] = args ? args.iconIndex : undefined;
            resourceInputs["iconPath"] = args ? args.iconPath : undefined;
            resourceInputs["msixPackageApplicationId"] = args ? args.msixPackageApplicationId : undefined;
            resourceInputs["msixPackageFamilyName"] = args ? args.msixPackageFamilyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["showInPortal"] = args ? args.showInPortal : undefined;
            resourceInputs["iconContent"] = undefined /*out*/;
            resourceInputs["iconHash"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["applicationType"] = undefined /*out*/;
            resourceInputs["commandLineArguments"] = undefined /*out*/;
            resourceInputs["commandLineSetting"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["filePath"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["iconContent"] = undefined /*out*/;
            resourceInputs["iconHash"] = undefined /*out*/;
            resourceInputs["iconIndex"] = undefined /*out*/;
            resourceInputs["iconPath"] = undefined /*out*/;
            resourceInputs["msixPackageApplicationId"] = undefined /*out*/;
            resourceInputs["msixPackageFamilyName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["showInPortal"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization:Application" }, { type: "azure-native:desktopvirtualization/v20190123preview:Application" }, { type: "azure-native:desktopvirtualization/v20190924preview:Application" }, { type: "azure-native:desktopvirtualization/v20191210preview:Application" }, { type: "azure-native:desktopvirtualization/v20200921preview:Application" }, { type: "azure-native:desktopvirtualization/v20201019preview:Application" }, { type: "azure-native:desktopvirtualization/v20201102preview:Application" }, { type: "azure-native:desktopvirtualization/v20201110preview:Application" }, { type: "azure-native:desktopvirtualization/v20210114preview:Application" }, { type: "azure-native:desktopvirtualization/v20210201preview:Application" }, { type: "azure-native:desktopvirtualization/v20210309preview:Application" }, { type: "azure-native:desktopvirtualization/v20210401preview:Application" }, { type: "azure-native:desktopvirtualization/v20210712:Application" }, { type: "azure-native:desktopvirtualization/v20210903preview:Application" }, { type: "azure-native:desktopvirtualization/v20220210preview:Application" }, { type: "azure-native:desktopvirtualization/v20220401preview:Application" }, { type: "azure-native:desktopvirtualization/v20220909:Application" }, { type: "azure-native:desktopvirtualization/v20221014preview:Application" }, { type: "azure-native:desktopvirtualization/v20230905:Application" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Application.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The name of the application group
     */
    applicationGroupName: pulumi.Input<string>;
    /**
     * The name of the application within the specified application group
     */
    applicationName?: pulumi.Input<string>;
    /**
     * Resource Type of Application.
     */
    applicationType?: pulumi.Input<string | types.enums.RemoteApplicationType>;
    /**
     * Command Line Arguments for Application.
     */
    commandLineArguments?: pulumi.Input<string>;
    /**
     * Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
     */
    commandLineSetting: pulumi.Input<string | types.enums.CommandLineSetting>;
    /**
     * Description of Application.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies a path for the executable file for the application.
     */
    filePath?: pulumi.Input<string>;
    /**
     * Friendly name of Application.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Index of the icon.
     */
    iconIndex?: pulumi.Input<number>;
    /**
     * Path to icon.
     */
    iconPath?: pulumi.Input<string>;
    /**
     * Specifies the package application Id for MSIX applications
     */
    msixPackageApplicationId?: pulumi.Input<string>;
    /**
     * Specifies the package family name for MSIX applications
     */
    msixPackageFamilyName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies whether to show the RemoteApp program in the RD Web Access server.
     */
    showInPortal?: pulumi.Input<boolean>;
}
