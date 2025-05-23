import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AvailabilitySetArgs } from "./availabilitySet";
export type AvailabilitySet = import("./availabilitySet").AvailabilitySet;
export const AvailabilitySet: typeof import("./availabilitySet").AvailabilitySet = null as any;
utilities.lazyLoad(exports, ["AvailabilitySet"], () => require("./availabilitySet"));

export { CapacityReservationArgs } from "./capacityReservation";
export type CapacityReservation = import("./capacityReservation").CapacityReservation;
export const CapacityReservation: typeof import("./capacityReservation").CapacityReservation = null as any;
utilities.lazyLoad(exports, ["CapacityReservation"], () => require("./capacityReservation"));

export { CapacityReservationGroupArgs } from "./capacityReservationGroup";
export type CapacityReservationGroup = import("./capacityReservationGroup").CapacityReservationGroup;
export const CapacityReservationGroup: typeof import("./capacityReservationGroup").CapacityReservationGroup = null as any;
utilities.lazyLoad(exports, ["CapacityReservationGroup"], () => require("./capacityReservationGroup"));

export { CloudServiceArgs } from "./cloudService";
export type CloudService = import("./cloudService").CloudService;
export const CloudService: typeof import("./cloudService").CloudService = null as any;
utilities.lazyLoad(exports, ["CloudService"], () => require("./cloudService"));

export { DedicatedHostArgs } from "./dedicatedHost";
export type DedicatedHost = import("./dedicatedHost").DedicatedHost;
export const DedicatedHost: typeof import("./dedicatedHost").DedicatedHost = null as any;
utilities.lazyLoad(exports, ["DedicatedHost"], () => require("./dedicatedHost"));

export { DedicatedHostGroupArgs } from "./dedicatedHostGroup";
export type DedicatedHostGroup = import("./dedicatedHostGroup").DedicatedHostGroup;
export const DedicatedHostGroup: typeof import("./dedicatedHostGroup").DedicatedHostGroup = null as any;
utilities.lazyLoad(exports, ["DedicatedHostGroup"], () => require("./dedicatedHostGroup"));

export { DiskArgs } from "./disk";
export type Disk = import("./disk").Disk;
export const Disk: typeof import("./disk").Disk = null as any;
utilities.lazyLoad(exports, ["Disk"], () => require("./disk"));

export { DiskAccessArgs } from "./diskAccess";
export type DiskAccess = import("./diskAccess").DiskAccess;
export const DiskAccess: typeof import("./diskAccess").DiskAccess = null as any;
utilities.lazyLoad(exports, ["DiskAccess"], () => require("./diskAccess"));

export { DiskAccessAPrivateEndpointConnectionArgs } from "./diskAccessAPrivateEndpointConnection";
export type DiskAccessAPrivateEndpointConnection = import("./diskAccessAPrivateEndpointConnection").DiskAccessAPrivateEndpointConnection;
export const DiskAccessAPrivateEndpointConnection: typeof import("./diskAccessAPrivateEndpointConnection").DiskAccessAPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["DiskAccessAPrivateEndpointConnection"], () => require("./diskAccessAPrivateEndpointConnection"));

export { DiskEncryptionSetArgs } from "./diskEncryptionSet";
export type DiskEncryptionSet = import("./diskEncryptionSet").DiskEncryptionSet;
export const DiskEncryptionSet: typeof import("./diskEncryptionSet").DiskEncryptionSet = null as any;
utilities.lazyLoad(exports, ["DiskEncryptionSet"], () => require("./diskEncryptionSet"));

export { GalleryArgs } from "./gallery";
export type Gallery = import("./gallery").Gallery;
export const Gallery: typeof import("./gallery").Gallery = null as any;
utilities.lazyLoad(exports, ["Gallery"], () => require("./gallery"));

export { GalleryApplicationArgs } from "./galleryApplication";
export type GalleryApplication = import("./galleryApplication").GalleryApplication;
export const GalleryApplication: typeof import("./galleryApplication").GalleryApplication = null as any;
utilities.lazyLoad(exports, ["GalleryApplication"], () => require("./galleryApplication"));

export { GalleryApplicationVersionArgs } from "./galleryApplicationVersion";
export type GalleryApplicationVersion = import("./galleryApplicationVersion").GalleryApplicationVersion;
export const GalleryApplicationVersion: typeof import("./galleryApplicationVersion").GalleryApplicationVersion = null as any;
utilities.lazyLoad(exports, ["GalleryApplicationVersion"], () => require("./galleryApplicationVersion"));

export { GalleryImageArgs } from "./galleryImage";
export type GalleryImage = import("./galleryImage").GalleryImage;
export const GalleryImage: typeof import("./galleryImage").GalleryImage = null as any;
utilities.lazyLoad(exports, ["GalleryImage"], () => require("./galleryImage"));

export { GalleryImageVersionArgs } from "./galleryImageVersion";
export type GalleryImageVersion = import("./galleryImageVersion").GalleryImageVersion;
export const GalleryImageVersion: typeof import("./galleryImageVersion").GalleryImageVersion = null as any;
utilities.lazyLoad(exports, ["GalleryImageVersion"], () => require("./galleryImageVersion"));

export { GalleryInVMAccessControlProfileArgs } from "./galleryInVMAccessControlProfile";
export type GalleryInVMAccessControlProfile = import("./galleryInVMAccessControlProfile").GalleryInVMAccessControlProfile;
export const GalleryInVMAccessControlProfile: typeof import("./galleryInVMAccessControlProfile").GalleryInVMAccessControlProfile = null as any;
utilities.lazyLoad(exports, ["GalleryInVMAccessControlProfile"], () => require("./galleryInVMAccessControlProfile"));

export { GalleryInVMAccessControlProfileVersionArgs } from "./galleryInVMAccessControlProfileVersion";
export type GalleryInVMAccessControlProfileVersion = import("./galleryInVMAccessControlProfileVersion").GalleryInVMAccessControlProfileVersion;
export const GalleryInVMAccessControlProfileVersion: typeof import("./galleryInVMAccessControlProfileVersion").GalleryInVMAccessControlProfileVersion = null as any;
utilities.lazyLoad(exports, ["GalleryInVMAccessControlProfileVersion"], () => require("./galleryInVMAccessControlProfileVersion"));

export { GetAvailabilitySetArgs, GetAvailabilitySetResult, GetAvailabilitySetOutputArgs } from "./getAvailabilitySet";
export const getAvailabilitySet: typeof import("./getAvailabilitySet").getAvailabilitySet = null as any;
export const getAvailabilitySetOutput: typeof import("./getAvailabilitySet").getAvailabilitySetOutput = null as any;
utilities.lazyLoad(exports, ["getAvailabilitySet","getAvailabilitySetOutput"], () => require("./getAvailabilitySet"));

export { GetCapacityReservationArgs, GetCapacityReservationResult, GetCapacityReservationOutputArgs } from "./getCapacityReservation";
export const getCapacityReservation: typeof import("./getCapacityReservation").getCapacityReservation = null as any;
export const getCapacityReservationOutput: typeof import("./getCapacityReservation").getCapacityReservationOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityReservation","getCapacityReservationOutput"], () => require("./getCapacityReservation"));

export { GetCapacityReservationGroupArgs, GetCapacityReservationGroupResult, GetCapacityReservationGroupOutputArgs } from "./getCapacityReservationGroup";
export const getCapacityReservationGroup: typeof import("./getCapacityReservationGroup").getCapacityReservationGroup = null as any;
export const getCapacityReservationGroupOutput: typeof import("./getCapacityReservationGroup").getCapacityReservationGroupOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityReservationGroup","getCapacityReservationGroupOutput"], () => require("./getCapacityReservationGroup"));

export { GetCloudServiceArgs, GetCloudServiceResult, GetCloudServiceOutputArgs } from "./getCloudService";
export const getCloudService: typeof import("./getCloudService").getCloudService = null as any;
export const getCloudServiceOutput: typeof import("./getCloudService").getCloudServiceOutput = null as any;
utilities.lazyLoad(exports, ["getCloudService","getCloudServiceOutput"], () => require("./getCloudService"));

export { GetDedicatedHostArgs, GetDedicatedHostResult, GetDedicatedHostOutputArgs } from "./getDedicatedHost";
export const getDedicatedHost: typeof import("./getDedicatedHost").getDedicatedHost = null as any;
export const getDedicatedHostOutput: typeof import("./getDedicatedHost").getDedicatedHostOutput = null as any;
utilities.lazyLoad(exports, ["getDedicatedHost","getDedicatedHostOutput"], () => require("./getDedicatedHost"));

export { GetDedicatedHostGroupArgs, GetDedicatedHostGroupResult, GetDedicatedHostGroupOutputArgs } from "./getDedicatedHostGroup";
export const getDedicatedHostGroup: typeof import("./getDedicatedHostGroup").getDedicatedHostGroup = null as any;
export const getDedicatedHostGroupOutput: typeof import("./getDedicatedHostGroup").getDedicatedHostGroupOutput = null as any;
utilities.lazyLoad(exports, ["getDedicatedHostGroup","getDedicatedHostGroupOutput"], () => require("./getDedicatedHostGroup"));

export { GetDiskArgs, GetDiskResult, GetDiskOutputArgs } from "./getDisk";
export const getDisk: typeof import("./getDisk").getDisk = null as any;
export const getDiskOutput: typeof import("./getDisk").getDiskOutput = null as any;
utilities.lazyLoad(exports, ["getDisk","getDiskOutput"], () => require("./getDisk"));

export { GetDiskAccessArgs, GetDiskAccessResult, GetDiskAccessOutputArgs } from "./getDiskAccess";
export const getDiskAccess: typeof import("./getDiskAccess").getDiskAccess = null as any;
export const getDiskAccessOutput: typeof import("./getDiskAccess").getDiskAccessOutput = null as any;
utilities.lazyLoad(exports, ["getDiskAccess","getDiskAccessOutput"], () => require("./getDiskAccess"));

export { GetDiskAccessAPrivateEndpointConnectionArgs, GetDiskAccessAPrivateEndpointConnectionResult, GetDiskAccessAPrivateEndpointConnectionOutputArgs } from "./getDiskAccessAPrivateEndpointConnection";
export const getDiskAccessAPrivateEndpointConnection: typeof import("./getDiskAccessAPrivateEndpointConnection").getDiskAccessAPrivateEndpointConnection = null as any;
export const getDiskAccessAPrivateEndpointConnectionOutput: typeof import("./getDiskAccessAPrivateEndpointConnection").getDiskAccessAPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getDiskAccessAPrivateEndpointConnection","getDiskAccessAPrivateEndpointConnectionOutput"], () => require("./getDiskAccessAPrivateEndpointConnection"));

export { GetDiskEncryptionSetArgs, GetDiskEncryptionSetResult, GetDiskEncryptionSetOutputArgs } from "./getDiskEncryptionSet";
export const getDiskEncryptionSet: typeof import("./getDiskEncryptionSet").getDiskEncryptionSet = null as any;
export const getDiskEncryptionSetOutput: typeof import("./getDiskEncryptionSet").getDiskEncryptionSetOutput = null as any;
utilities.lazyLoad(exports, ["getDiskEncryptionSet","getDiskEncryptionSetOutput"], () => require("./getDiskEncryptionSet"));

export { GetGalleryArgs, GetGalleryResult, GetGalleryOutputArgs } from "./getGallery";
export const getGallery: typeof import("./getGallery").getGallery = null as any;
export const getGalleryOutput: typeof import("./getGallery").getGalleryOutput = null as any;
utilities.lazyLoad(exports, ["getGallery","getGalleryOutput"], () => require("./getGallery"));

export { GetGalleryApplicationArgs, GetGalleryApplicationResult, GetGalleryApplicationOutputArgs } from "./getGalleryApplication";
export const getGalleryApplication: typeof import("./getGalleryApplication").getGalleryApplication = null as any;
export const getGalleryApplicationOutput: typeof import("./getGalleryApplication").getGalleryApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryApplication","getGalleryApplicationOutput"], () => require("./getGalleryApplication"));

export { GetGalleryApplicationVersionArgs, GetGalleryApplicationVersionResult, GetGalleryApplicationVersionOutputArgs } from "./getGalleryApplicationVersion";
export const getGalleryApplicationVersion: typeof import("./getGalleryApplicationVersion").getGalleryApplicationVersion = null as any;
export const getGalleryApplicationVersionOutput: typeof import("./getGalleryApplicationVersion").getGalleryApplicationVersionOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryApplicationVersion","getGalleryApplicationVersionOutput"], () => require("./getGalleryApplicationVersion"));

export { GetGalleryImageArgs, GetGalleryImageResult, GetGalleryImageOutputArgs } from "./getGalleryImage";
export const getGalleryImage: typeof import("./getGalleryImage").getGalleryImage = null as any;
export const getGalleryImageOutput: typeof import("./getGalleryImage").getGalleryImageOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryImage","getGalleryImageOutput"], () => require("./getGalleryImage"));

export { GetGalleryImageVersionArgs, GetGalleryImageVersionResult, GetGalleryImageVersionOutputArgs } from "./getGalleryImageVersion";
export const getGalleryImageVersion: typeof import("./getGalleryImageVersion").getGalleryImageVersion = null as any;
export const getGalleryImageVersionOutput: typeof import("./getGalleryImageVersion").getGalleryImageVersionOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryImageVersion","getGalleryImageVersionOutput"], () => require("./getGalleryImageVersion"));

export { GetGalleryInVMAccessControlProfileArgs, GetGalleryInVMAccessControlProfileResult, GetGalleryInVMAccessControlProfileOutputArgs } from "./getGalleryInVMAccessControlProfile";
export const getGalleryInVMAccessControlProfile: typeof import("./getGalleryInVMAccessControlProfile").getGalleryInVMAccessControlProfile = null as any;
export const getGalleryInVMAccessControlProfileOutput: typeof import("./getGalleryInVMAccessControlProfile").getGalleryInVMAccessControlProfileOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryInVMAccessControlProfile","getGalleryInVMAccessControlProfileOutput"], () => require("./getGalleryInVMAccessControlProfile"));

export { GetGalleryInVMAccessControlProfileVersionArgs, GetGalleryInVMAccessControlProfileVersionResult, GetGalleryInVMAccessControlProfileVersionOutputArgs } from "./getGalleryInVMAccessControlProfileVersion";
export const getGalleryInVMAccessControlProfileVersion: typeof import("./getGalleryInVMAccessControlProfileVersion").getGalleryInVMAccessControlProfileVersion = null as any;
export const getGalleryInVMAccessControlProfileVersionOutput: typeof import("./getGalleryInVMAccessControlProfileVersion").getGalleryInVMAccessControlProfileVersionOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryInVMAccessControlProfileVersion","getGalleryInVMAccessControlProfileVersionOutput"], () => require("./getGalleryInVMAccessControlProfileVersion"));

export { GetImageArgs, GetImageResult, GetImageOutputArgs } from "./getImage";
export const getImage: typeof import("./getImage").getImage = null as any;
export const getImageOutput: typeof import("./getImage").getImageOutput = null as any;
utilities.lazyLoad(exports, ["getImage","getImageOutput"], () => require("./getImage"));

export { GetLogAnalyticExportRequestRateByIntervalArgs, GetLogAnalyticExportRequestRateByIntervalResult, GetLogAnalyticExportRequestRateByIntervalOutputArgs } from "./getLogAnalyticExportRequestRateByInterval";
export const getLogAnalyticExportRequestRateByInterval: typeof import("./getLogAnalyticExportRequestRateByInterval").getLogAnalyticExportRequestRateByInterval = null as any;
export const getLogAnalyticExportRequestRateByIntervalOutput: typeof import("./getLogAnalyticExportRequestRateByInterval").getLogAnalyticExportRequestRateByIntervalOutput = null as any;
utilities.lazyLoad(exports, ["getLogAnalyticExportRequestRateByInterval","getLogAnalyticExportRequestRateByIntervalOutput"], () => require("./getLogAnalyticExportRequestRateByInterval"));

export { GetLogAnalyticExportThrottledRequestsArgs, GetLogAnalyticExportThrottledRequestsResult, GetLogAnalyticExportThrottledRequestsOutputArgs } from "./getLogAnalyticExportThrottledRequests";
export const getLogAnalyticExportThrottledRequests: typeof import("./getLogAnalyticExportThrottledRequests").getLogAnalyticExportThrottledRequests = null as any;
export const getLogAnalyticExportThrottledRequestsOutput: typeof import("./getLogAnalyticExportThrottledRequests").getLogAnalyticExportThrottledRequestsOutput = null as any;
utilities.lazyLoad(exports, ["getLogAnalyticExportThrottledRequests","getLogAnalyticExportThrottledRequestsOutput"], () => require("./getLogAnalyticExportThrottledRequests"));

export { GetProximityPlacementGroupArgs, GetProximityPlacementGroupResult, GetProximityPlacementGroupOutputArgs } from "./getProximityPlacementGroup";
export const getProximityPlacementGroup: typeof import("./getProximityPlacementGroup").getProximityPlacementGroup = null as any;
export const getProximityPlacementGroupOutput: typeof import("./getProximityPlacementGroup").getProximityPlacementGroupOutput = null as any;
utilities.lazyLoad(exports, ["getProximityPlacementGroup","getProximityPlacementGroupOutput"], () => require("./getProximityPlacementGroup"));

export { GetRestorePointArgs, GetRestorePointResult, GetRestorePointOutputArgs } from "./getRestorePoint";
export const getRestorePoint: typeof import("./getRestorePoint").getRestorePoint = null as any;
export const getRestorePointOutput: typeof import("./getRestorePoint").getRestorePointOutput = null as any;
utilities.lazyLoad(exports, ["getRestorePoint","getRestorePointOutput"], () => require("./getRestorePoint"));

export { GetRestorePointCollectionArgs, GetRestorePointCollectionResult, GetRestorePointCollectionOutputArgs } from "./getRestorePointCollection";
export const getRestorePointCollection: typeof import("./getRestorePointCollection").getRestorePointCollection = null as any;
export const getRestorePointCollectionOutput: typeof import("./getRestorePointCollection").getRestorePointCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getRestorePointCollection","getRestorePointCollectionOutput"], () => require("./getRestorePointCollection"));

export { GetSnapshotArgs, GetSnapshotResult, GetSnapshotOutputArgs } from "./getSnapshot";
export const getSnapshot: typeof import("./getSnapshot").getSnapshot = null as any;
export const getSnapshotOutput: typeof import("./getSnapshot").getSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshot","getSnapshotOutput"], () => require("./getSnapshot"));

export { GetSshPublicKeyArgs, GetSshPublicKeyResult, GetSshPublicKeyOutputArgs } from "./getSshPublicKey";
export const getSshPublicKey: typeof import("./getSshPublicKey").getSshPublicKey = null as any;
export const getSshPublicKeyOutput: typeof import("./getSshPublicKey").getSshPublicKeyOutput = null as any;
utilities.lazyLoad(exports, ["getSshPublicKey","getSshPublicKeyOutput"], () => require("./getSshPublicKey"));

export { GetVirtualMachineArgs, GetVirtualMachineResult, GetVirtualMachineOutputArgs } from "./getVirtualMachine";
export const getVirtualMachine: typeof import("./getVirtualMachine").getVirtualMachine = null as any;
export const getVirtualMachineOutput: typeof import("./getVirtualMachine").getVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachine","getVirtualMachineOutput"], () => require("./getVirtualMachine"));

export { GetVirtualMachineExtensionArgs, GetVirtualMachineExtensionResult, GetVirtualMachineExtensionOutputArgs } from "./getVirtualMachineExtension";
export const getVirtualMachineExtension: typeof import("./getVirtualMachineExtension").getVirtualMachineExtension = null as any;
export const getVirtualMachineExtensionOutput: typeof import("./getVirtualMachineExtension").getVirtualMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineExtension","getVirtualMachineExtensionOutput"], () => require("./getVirtualMachineExtension"));

export { GetVirtualMachineRunCommandByVirtualMachineArgs, GetVirtualMachineRunCommandByVirtualMachineResult, GetVirtualMachineRunCommandByVirtualMachineOutputArgs } from "./getVirtualMachineRunCommandByVirtualMachine";
export const getVirtualMachineRunCommandByVirtualMachine: typeof import("./getVirtualMachineRunCommandByVirtualMachine").getVirtualMachineRunCommandByVirtualMachine = null as any;
export const getVirtualMachineRunCommandByVirtualMachineOutput: typeof import("./getVirtualMachineRunCommandByVirtualMachine").getVirtualMachineRunCommandByVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineRunCommandByVirtualMachine","getVirtualMachineRunCommandByVirtualMachineOutput"], () => require("./getVirtualMachineRunCommandByVirtualMachine"));

export { GetVirtualMachineScaleSetArgs, GetVirtualMachineScaleSetResult, GetVirtualMachineScaleSetOutputArgs } from "./getVirtualMachineScaleSet";
export const getVirtualMachineScaleSet: typeof import("./getVirtualMachineScaleSet").getVirtualMachineScaleSet = null as any;
export const getVirtualMachineScaleSetOutput: typeof import("./getVirtualMachineScaleSet").getVirtualMachineScaleSetOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineScaleSet","getVirtualMachineScaleSetOutput"], () => require("./getVirtualMachineScaleSet"));

export { GetVirtualMachineScaleSetExtensionArgs, GetVirtualMachineScaleSetExtensionResult, GetVirtualMachineScaleSetExtensionOutputArgs } from "./getVirtualMachineScaleSetExtension";
export const getVirtualMachineScaleSetExtension: typeof import("./getVirtualMachineScaleSetExtension").getVirtualMachineScaleSetExtension = null as any;
export const getVirtualMachineScaleSetExtensionOutput: typeof import("./getVirtualMachineScaleSetExtension").getVirtualMachineScaleSetExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineScaleSetExtension","getVirtualMachineScaleSetExtensionOutput"], () => require("./getVirtualMachineScaleSetExtension"));

export { GetVirtualMachineScaleSetVMArgs, GetVirtualMachineScaleSetVMResult, GetVirtualMachineScaleSetVMOutputArgs } from "./getVirtualMachineScaleSetVM";
export const getVirtualMachineScaleSetVM: typeof import("./getVirtualMachineScaleSetVM").getVirtualMachineScaleSetVM = null as any;
export const getVirtualMachineScaleSetVMOutput: typeof import("./getVirtualMachineScaleSetVM").getVirtualMachineScaleSetVMOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineScaleSetVM","getVirtualMachineScaleSetVMOutput"], () => require("./getVirtualMachineScaleSetVM"));

export { GetVirtualMachineScaleSetVMExtensionArgs, GetVirtualMachineScaleSetVMExtensionResult, GetVirtualMachineScaleSetVMExtensionOutputArgs } from "./getVirtualMachineScaleSetVMExtension";
export const getVirtualMachineScaleSetVMExtension: typeof import("./getVirtualMachineScaleSetVMExtension").getVirtualMachineScaleSetVMExtension = null as any;
export const getVirtualMachineScaleSetVMExtensionOutput: typeof import("./getVirtualMachineScaleSetVMExtension").getVirtualMachineScaleSetVMExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineScaleSetVMExtension","getVirtualMachineScaleSetVMExtensionOutput"], () => require("./getVirtualMachineScaleSetVMExtension"));

export { GetVirtualMachineScaleSetVMRunCommandArgs, GetVirtualMachineScaleSetVMRunCommandResult, GetVirtualMachineScaleSetVMRunCommandOutputArgs } from "./getVirtualMachineScaleSetVMRunCommand";
export const getVirtualMachineScaleSetVMRunCommand: typeof import("./getVirtualMachineScaleSetVMRunCommand").getVirtualMachineScaleSetVMRunCommand = null as any;
export const getVirtualMachineScaleSetVMRunCommandOutput: typeof import("./getVirtualMachineScaleSetVMRunCommand").getVirtualMachineScaleSetVMRunCommandOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineScaleSetVMRunCommand","getVirtualMachineScaleSetVMRunCommandOutput"], () => require("./getVirtualMachineScaleSetVMRunCommand"));

export { ImageArgs } from "./image";
export type Image = import("./image").Image;
export const Image: typeof import("./image").Image = null as any;
utilities.lazyLoad(exports, ["Image"], () => require("./image"));

export { ProximityPlacementGroupArgs } from "./proximityPlacementGroup";
export type ProximityPlacementGroup = import("./proximityPlacementGroup").ProximityPlacementGroup;
export const ProximityPlacementGroup: typeof import("./proximityPlacementGroup").ProximityPlacementGroup = null as any;
utilities.lazyLoad(exports, ["ProximityPlacementGroup"], () => require("./proximityPlacementGroup"));

export { RestorePointArgs } from "./restorePoint";
export type RestorePoint = import("./restorePoint").RestorePoint;
export const RestorePoint: typeof import("./restorePoint").RestorePoint = null as any;
utilities.lazyLoad(exports, ["RestorePoint"], () => require("./restorePoint"));

export { RestorePointCollectionArgs } from "./restorePointCollection";
export type RestorePointCollection = import("./restorePointCollection").RestorePointCollection;
export const RestorePointCollection: typeof import("./restorePointCollection").RestorePointCollection = null as any;
utilities.lazyLoad(exports, ["RestorePointCollection"], () => require("./restorePointCollection"));

export { SnapshotArgs } from "./snapshot";
export type Snapshot = import("./snapshot").Snapshot;
export const Snapshot: typeof import("./snapshot").Snapshot = null as any;
utilities.lazyLoad(exports, ["Snapshot"], () => require("./snapshot"));

export { SshPublicKeyArgs } from "./sshPublicKey";
export type SshPublicKey = import("./sshPublicKey").SshPublicKey;
export const SshPublicKey: typeof import("./sshPublicKey").SshPublicKey = null as any;
utilities.lazyLoad(exports, ["SshPublicKey"], () => require("./sshPublicKey"));

export { VirtualMachineArgs } from "./virtualMachine";
export type VirtualMachine = import("./virtualMachine").VirtualMachine;
export const VirtualMachine: typeof import("./virtualMachine").VirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachine"], () => require("./virtualMachine"));

export { VirtualMachineExtensionArgs } from "./virtualMachineExtension";
export type VirtualMachineExtension = import("./virtualMachineExtension").VirtualMachineExtension;
export const VirtualMachineExtension: typeof import("./virtualMachineExtension").VirtualMachineExtension = null as any;
utilities.lazyLoad(exports, ["VirtualMachineExtension"], () => require("./virtualMachineExtension"));

export { VirtualMachineRunCommandByVirtualMachineArgs } from "./virtualMachineRunCommandByVirtualMachine";
export type VirtualMachineRunCommandByVirtualMachine = import("./virtualMachineRunCommandByVirtualMachine").VirtualMachineRunCommandByVirtualMachine;
export const VirtualMachineRunCommandByVirtualMachine: typeof import("./virtualMachineRunCommandByVirtualMachine").VirtualMachineRunCommandByVirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachineRunCommandByVirtualMachine"], () => require("./virtualMachineRunCommandByVirtualMachine"));

export { VirtualMachineScaleSetArgs } from "./virtualMachineScaleSet";
export type VirtualMachineScaleSet = import("./virtualMachineScaleSet").VirtualMachineScaleSet;
export const VirtualMachineScaleSet: typeof import("./virtualMachineScaleSet").VirtualMachineScaleSet = null as any;
utilities.lazyLoad(exports, ["VirtualMachineScaleSet"], () => require("./virtualMachineScaleSet"));

export { VirtualMachineScaleSetExtensionArgs } from "./virtualMachineScaleSetExtension";
export type VirtualMachineScaleSetExtension = import("./virtualMachineScaleSetExtension").VirtualMachineScaleSetExtension;
export const VirtualMachineScaleSetExtension: typeof import("./virtualMachineScaleSetExtension").VirtualMachineScaleSetExtension = null as any;
utilities.lazyLoad(exports, ["VirtualMachineScaleSetExtension"], () => require("./virtualMachineScaleSetExtension"));

export { VirtualMachineScaleSetVMArgs } from "./virtualMachineScaleSetVM";
export type VirtualMachineScaleSetVM = import("./virtualMachineScaleSetVM").VirtualMachineScaleSetVM;
export const VirtualMachineScaleSetVM: typeof import("./virtualMachineScaleSetVM").VirtualMachineScaleSetVM = null as any;
utilities.lazyLoad(exports, ["VirtualMachineScaleSetVM"], () => require("./virtualMachineScaleSetVM"));

export { VirtualMachineScaleSetVMExtensionArgs } from "./virtualMachineScaleSetVMExtension";
export type VirtualMachineScaleSetVMExtension = import("./virtualMachineScaleSetVMExtension").VirtualMachineScaleSetVMExtension;
export const VirtualMachineScaleSetVMExtension: typeof import("./virtualMachineScaleSetVMExtension").VirtualMachineScaleSetVMExtension = null as any;
utilities.lazyLoad(exports, ["VirtualMachineScaleSetVMExtension"], () => require("./virtualMachineScaleSetVMExtension"));

export { VirtualMachineScaleSetVMRunCommandArgs } from "./virtualMachineScaleSetVMRunCommand";
export type VirtualMachineScaleSetVMRunCommand = import("./virtualMachineScaleSetVMRunCommand").VirtualMachineScaleSetVMRunCommand;
export const VirtualMachineScaleSetVMRunCommand: typeof import("./virtualMachineScaleSetVMRunCommand").VirtualMachineScaleSetVMRunCommand = null as any;
utilities.lazyLoad(exports, ["VirtualMachineScaleSetVMRunCommand"], () => require("./virtualMachineScaleSetVMRunCommand"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:compute:AvailabilitySet":
                return new AvailabilitySet(name, <any>undefined, { urn })
            case "azure-native:compute:CapacityReservation":
                return new CapacityReservation(name, <any>undefined, { urn })
            case "azure-native:compute:CapacityReservationGroup":
                return new CapacityReservationGroup(name, <any>undefined, { urn })
            case "azure-native:compute:CloudService":
                return new CloudService(name, <any>undefined, { urn })
            case "azure-native:compute:DedicatedHost":
                return new DedicatedHost(name, <any>undefined, { urn })
            case "azure-native:compute:DedicatedHostGroup":
                return new DedicatedHostGroup(name, <any>undefined, { urn })
            case "azure-native:compute:Disk":
                return new Disk(name, <any>undefined, { urn })
            case "azure-native:compute:DiskAccess":
                return new DiskAccess(name, <any>undefined, { urn })
            case "azure-native:compute:DiskAccessAPrivateEndpointConnection":
                return new DiskAccessAPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:compute:DiskEncryptionSet":
                return new DiskEncryptionSet(name, <any>undefined, { urn })
            case "azure-native:compute:Gallery":
                return new Gallery(name, <any>undefined, { urn })
            case "azure-native:compute:GalleryApplication":
                return new GalleryApplication(name, <any>undefined, { urn })
            case "azure-native:compute:GalleryApplicationVersion":
                return new GalleryApplicationVersion(name, <any>undefined, { urn })
            case "azure-native:compute:GalleryImage":
                return new GalleryImage(name, <any>undefined, { urn })
            case "azure-native:compute:GalleryImageVersion":
                return new GalleryImageVersion(name, <any>undefined, { urn })
            case "azure-native:compute:GalleryInVMAccessControlProfile":
                return new GalleryInVMAccessControlProfile(name, <any>undefined, { urn })
            case "azure-native:compute:GalleryInVMAccessControlProfileVersion":
                return new GalleryInVMAccessControlProfileVersion(name, <any>undefined, { urn })
            case "azure-native:compute:Image":
                return new Image(name, <any>undefined, { urn })
            case "azure-native:compute:ProximityPlacementGroup":
                return new ProximityPlacementGroup(name, <any>undefined, { urn })
            case "azure-native:compute:RestorePoint":
                return new RestorePoint(name, <any>undefined, { urn })
            case "azure-native:compute:RestorePointCollection":
                return new RestorePointCollection(name, <any>undefined, { urn })
            case "azure-native:compute:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            case "azure-native:compute:SshPublicKey":
                return new SshPublicKey(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachineExtension":
                return new VirtualMachineExtension(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachineRunCommandByVirtualMachine":
                return new VirtualMachineRunCommandByVirtualMachine(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachineScaleSet":
                return new VirtualMachineScaleSet(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachineScaleSetExtension":
                return new VirtualMachineScaleSetExtension(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachineScaleSetVM":
                return new VirtualMachineScaleSetVM(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachineScaleSetVMExtension":
                return new VirtualMachineScaleSetVMExtension(name, <any>undefined, { urn })
            case "azure-native:compute:VirtualMachineScaleSetVMRunCommand":
                return new VirtualMachineScaleSetVMRunCommand(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "compute", _module)