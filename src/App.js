import React from 'react'
import { SvgLoader, SvgProxy } from 'react-svgmt'
import Regions from './assets/regions'
import Departments from './assets/departements.json'
import Visualizer from './Visualizer'

const COLORS = {
    selected: "#1abc9c",
    unselected: "#95a5a6"
}

class App extends React.Component {

    state = {
        departments: Departments,
        lastDepartment: undefined
    }

    componentDidMount() {
        [...document.getElementsByTagName("text")].forEach(t => t.style['pointer-events'] = 'none')
    }

    render() {
        const { departments, lastDepartment } = this.state;
        console.log(lastDepartment ? Departments.find(f => f.num_dep === Number(lastDepartment.id.replace("departement", ""))) : undefined)
        return (
            <div className="App">
                <SvgLoader svgXML={Regions}>
                    <SvgProxy selector="#carte" fill="#eee" />
                    {departments.map(r => {
                        return <SvgProxy
                            key={r.num_dep}
                            selector={`*[id^="departement${r.num_dep}"]`}
                            fill={COLORS.unselected}
                            onClick={e => {
                                // e.stopPropagation()
                                console.log(e, 'COUCOU')
                                e.target.style.fill = COLORS.selected

                                if (lastDepartment && lastDepartment.id !== e.target.id)
                                    lastDepartment.style.fill = COLORS.unselected

                                this.setState({
                                    lastDepartment: e.target
                                })
                            }}
                        />
                    })}
                </SvgLoader>
                <Visualizer department={lastDepartment ?
                    Departments.find(f => `${"" + f.num_dep}` === lastDepartment.id.replace("departement", ""))?.dep_name : undefined} />
            </div>
        );
    }
}

export default App;
