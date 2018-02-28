# Responsive Images

Reponsive Image according to the device width.

## Getting Started

This is native javascript plugins which download relative image according to the device's width. For example Larger images for larger display and small image for smaller device such as smart phone.



### Installing

A step by step series of examples that tell you have to get a development env running

HTML CODE

```
<img src="img/img1-xs.png"  data-images={"xl":"img/img1-xl.png","lg":"img/img1-lg.png","md":"img/img1-md.png","sm":"img/img1-sm.png","xs":"img/img1-xs.png"} />
<img src="img/img2-xs.png"  data-images={"xl":"img/img2-xl.png","xs":"img/img2-xs.png"} />
<img src="img/img1-md.png" data-images="" />
<img src="img/img2-xs.png" data-images="asdf" />
<img src="img/img2-xs.png" />
```

JAVASCRIPT CODE : Make sure you are puting javascript at bottom of html before closing body tag </body>

```
<script src="js/responsiveimages.js"></script>
<script>
	let img=new ResponsiveImages();
	img.init();
</script>
```


## Contributing

Please read [CONTRIBUTING.md](https://github.com/hirakumar/responsiveimages) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/hirakumar/responsiveimages)

## Authors

* **Hira Kumar Maharjan** - *Initial work* - [Responsive Images](https://github.com/hirakumar/responsiveimages)

See also the list of [contributors](https://github.com/hirakumar/responsiveimages/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

