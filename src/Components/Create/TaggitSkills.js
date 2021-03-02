import React from 'react';
import ReactTags from 'react-tag-autocomplete';




export class TaggitSkills extends React.Component {
    constructor (props) {
        super(props)
     
        this.state = {
          tags: [ ],
          suggestions: [
            { id: 1, name: "JAVA" },
            { id: 2, name: "PHP" },
            { id: 3, name: "JavaSript" },
            { id: 4, name: "ReactJS" },
            { id: 5, name: "Python" },
            { id: 6, name: "Angular" },
          ]
        }
     
        this.reactTags = React.createRef()
      }
     
      onDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
      }
     
      onAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        var localData = localStorage.getItem('skill')
        localStorage.removeItem('skill')
        this.setState({ tags })
        localStorage.setItem("skill",localData.concat(tag.name).concat(", "))
      }
     
      render () {
        return (
          <ReactTags 
            ref={this.reactTags}
            tags={this.state.tags}
            suggestions={this.state.suggestions}
            onDelete={this.onDelete.bind(this)}
            placeholderText="Add Skills"
            onAddition={this.onAddition.bind(this)} />
        )
      }
}

