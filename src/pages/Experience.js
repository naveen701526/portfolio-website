import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2015 - 2017'
          iconStyle={{ backgroundColor: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Naryana Junior College
          </h3>
          <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2021'
          iconStyle={{ backgroundColor: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Andhra University</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>
          <p>Geo Informatics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2022 - 2023'
          iconStyle={{ backgroundColor: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Custom Software Engineering Associate - Accenture
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Hyderabad, India
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2023 - Present'
          iconStyle={{ backgroundColor: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Custom Software Engineering Analyst - Accenture
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Hyderabad, India
          </h4>
          <p>Migration from Legacy to React CodeBase.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
