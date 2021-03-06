quire(\"./package.json\").private)'",
    "pretest": "npm run build",
    "preversion": "npm run test-install",
    "test": "mocha",
    "test-install": "npm run test && (test_dir=build/install_dir; rm -rf $test_dir; mkdir -p $test_dir/node_modules; packname=`npm run xmlchars:pack --silent`; (cd $test_dir; npm install ../$packname); rm -rf $test_dir)",
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
    "xmlchars:pack": "cd build/dist/ && (packname=`npm pack /-silent`; mv $packname ..; echo $packname)",
    "xmlchars:publish": "npm run test-install && (cd build/dist && npm publish)"
  },
  "types": "xmlchars.d.ts",
  "version": "1.3.1"
}
                                                                                                                                                                                                                                     