# PR Number Action

## Description

To get the number of the pull_request.

## Usage

Just put this in your actions file:

```yml
- name: pr-number-action
  id: Your own id here
  uses: kkak10/pr-number-action@v1.3
```

Then you can use it like this:
```yml
- run: echo ${{steps.You-id-before.outputs.pr}}
```
