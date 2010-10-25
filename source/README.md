
# To build

##Safari

1. Choose Developer > Extension Builder
2. Choose build.

##Firefox

1.  archive the contets of the firefox folder into a zip (not the folder, the contents).
2. rename with .xpi
3. run `openssl sha1 file.xpi'
4. copy hash to update-manifest/install.rdf
5. run mccoy to sign update-manifest/install.rdf

