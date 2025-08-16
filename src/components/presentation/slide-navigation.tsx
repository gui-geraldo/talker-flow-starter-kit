import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideSelect: (slide: number) => void;
  slideTitle: string;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onSlideSelect,
  slideTitle
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <span>{currentSlide + 1}</span>
            <div className="w-32 bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-smooth"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              />
            </div>
            <span>{totalSlides}</span>
          </div>
        </div>

        <div className="flex-1 text-center px-4">
          <h3 className="text-sm font-medium text-foreground truncate">
            {slideTitle}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="gap-2"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};