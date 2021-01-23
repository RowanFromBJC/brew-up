# brew-up
A small Lock File system for Homebrew

## Prerequisites
Install [homebrew](https://brew.sh)

Make sure Node.JS is installed at `/usr/bin/node`

Make sure there is a copy of bash at `/bin/bash`

Make sure fs is installed in the directory you will be cloning this repository to. (Install fs by installing Node.JS and running `npm init -y && npm i fs`
## Installing
Clone this repository, cd to it, &amp; chmod it
```bash
git clone https://github.com/RowanFromBJC/brew-up.git && cd brew-up && chmod -R +x ./
```
Add the `bin` directory to your `$PATH`
```bash
export PATH="$(pwd)/bin:$PATH"
```
Add `$PATH` to your `~/.bashrc`
```bash
printf "\nexport PATH=\"$(pwd)/bin:$PATH\"\n" >> ~/.bashrc
```
## Using
brew-up &lt;command&gt;
* Commands
  - --help: display help screen
  - --new: create / reset lock file
  - &lt;package&gt;: add package to lock file, does NOT install package
  - tap &lt;user/repo&gt;: add tap to lock file, does NOT tap.
  - --deps: install all packages / tap all taps in lock file
  - --remove &lt;package&gt;: remove package from lock file
  - --remove-tap &lt;user/repo&gt;: remove tap
## Important notes
__DO NOT__ use more than one argument/option, it will malform lock file __UNLESS__ you are using --remove, --remove-tap, or tap &lt;repo&gt;, in which you would not use more than 2 arguments/options.

_3 files, 143 lines, 1 repository, 1 command_
