# [6.0.0](https://github.com/SortableJS/react-sortablejs/compare/v5.0.5...v6.0.0) (2020-09-27)


### Bug Fixes

* **types:** removes MultiDrag and Swap exports from index ([f34c861](https://github.com/SortableJS/react-sortablejs/commit/f34c861ce922b230918238805bf72af59b7910c1)), closes [#179](https://github.com/SortableJS/react-sortablejs/issues/179)


### Build System

* **parcel:** replace rollup with parcel 2 ([3876be2](https://github.com/SortableJS/react-sortablejs/commit/3876be245ae074962d28ca64a1d00eb70131afaa))


### BREAKING CHANGES

* **parcel:** packagejson#module was removed because the file is no longer being generated.
* **types:** it's apparent we're import sortablejs with all plugins mounted. We've had a few
bugs come in that MultiDrag no longer exports because of version 1.12.x of sortablejs making an
accidental breaking change.

## [5.0.5](https://github.com/SortableJS/react-sortablejs/compare/v5.0.4...v5.0.5) (2020-09-25)


### Bug Fixes

* **util.ts:** changes custom type Omit to extend keyof T ([9db7297](https://github.com/SortableJS/react-sortablejs/commit/9db7297ecb2985122dc431a6df869833d440d861))
