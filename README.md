# Pulumi Azure Native subpackages

These packages have been generated by [Ankvi](https://github.com/Ankvi)'s [pulumi
transformer](https://github.com/Ankvi/pulumi-transformer) project.

The project splits the [Pulumi Azure Native](https://github.com/pulumi/pulumi-azure-native)
npm package into smaller, more manageable packages that won't break your TypeScript
server because of too high memory usage.

This project will not cover bugs that should be solved by Pulumi, but if there's
anything wrong with the output, feel free to raise an issue so it can be fixed as
I do not have the capacity to test out all of the features, only the ones my
team uses.

## TODOs

- [x] Move types/enums into each respective module
- [x] Move types/enums from earlier versions in their respective sub modules
  - (e.g. `v20230101`/`v20230101preview`)
- [ ] Publish all packages to npm (~80/208)
  - Takes time as npm has rate limiting measures against publishing a lot of packages
    in a short time
