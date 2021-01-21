# brew-up
A small Lock File system for Homebrew

## Prerequisites
Install [homebrew](https://brew.sh)

Make sure Node.JS is installed at `/usr/bin/node`

Make sure there is a copy of bash at `/bin/bash`
## Installing
Clone this repository &amp; cd to it
```bash
git clone https://github.com/RowanFromBJC/brew-up.git && cd brew-up
```
Add `./bin` to your `$PATH`
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
  - --deps: install all packages in lock file
  - --remove &lt;package&gt;: remove package from lock file
## Important notes
__DO NOT__ use more than one argument/option, it will malform lock file __UNLESS__ you are using --remove, in which you would not use more than 2 arguments/options.

_3 files, 143 lines, 1 repository, 1 command_
