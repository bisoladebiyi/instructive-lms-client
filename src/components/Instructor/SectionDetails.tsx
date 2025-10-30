import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RiDraggable } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { IROUTES } from "../../utils/constants/routes";

interface Lesson {
  id: string;
  title: string;
}

interface SectionDetailsProps {
  sectionTitle: string;
  initialLessons: Lesson[];
}

const SectionDetails: React.FC<SectionDetailsProps> = ({ initialLessons }) => {
  const [lessons, setLessons] = useState(initialLessons);
  const navigate = useNavigate();

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(lessons);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setLessons(items);
  };

  const addNewLesson = () => {
    navigate(IROUTES.LESSON_CREATE.replace(":courseId", "8"));
  };

  return (
    <div className="">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="lessons">
          {(provided) => (
            <ul
              className="space-y-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lessons.map((lesson, index) => (
                <Draggable
                  key={lesson.id}
                  draggableId={lesson.id}
                  index={index}
                >
                  {(provided) => (
                    <Link
                      className="flex cursor-pointer justify-between items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100"
                      to={IROUTES.LESSON.replace(":lessonId", `${lesson.id}`)}
                    >
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <span className="text-gray-800 flex items-center gap-2">
                          <RiDraggable className="text-gray-400" />{" "}
                          {lesson.title}
                        </span>
                      </li>
                    </Link>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div className="mt-4 text-center">
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={addNewLesson}
        >
          Add New Lesson
        </Button>
      </div>
    </div>
  );
};

export default SectionDetails;
