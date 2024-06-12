class EarthWorm {
    constructor(width, height) {
        this.width = width;                 // 맵 너비값
        this.height = height;              // 맵 높이값
        this.headDirection = 'RIGHT';      // 초기 방향
        this.worm = [{x:10,y:10}];           //지렁이 좌표
        this.apple = this.createApple();        //사과 좌표
        this.isGameOver = false;          // 종료 여부
    }

    gameReset(){
        this.worm = {x:10,y:10};
        this.headDirection = 'RIGHT';
        this.isGameOver = false;
    }
    
    //
    setHeadDirection(direction){
        if(direction == 'RIGHT' && this.headDirection !== 'LEFT'){
            this.headDirection = 'RIGHT';
        }
        if(direction == 'LEFT' && this.headDirection !== 'RIGHT'){
            this.headDirection = 'LEFT';
        }
        if(direction == 'UP' && this.headDirection !== 'DOWN'){
            this.headDirection = 'UP';
        }
        if(direction == 'DOWN' && this.headDirection !== 'UP'){
            this.headDirection = 'DOWN';
        }
    }
    
    //라이브러리에서 사용
    createApple() {
        var coordinateX = Math.floor(Math.random() * this.width);
        var coordinateY = Math.floor(Math.random() * this.height);
        return {x:coordinateX, y:coordinateY};
    }

    updateWormStatus() {
        if(this.isGameOver) return

        const head = Object.assign({}, this.worm[0]);
        
        //지렁이 방향에 따른 좌표값 수정
        if(this.headDirection == 'RIGHT'){
            head.x = head.x + 1;
        }
        if(this.headDirection == 'LEFT'){
            head.x = head.x - 1;
        }
        if(this.headDirection == 'UP'){
            head.y = head.y - 1;
        }
        if(this.headDirection == 'DOWN'){
            head.y = head.y + 1;
        }

        this.worm.unshift(head);

        if(Object.entries(head).toString() !== Object.entries(this.apple).toString()){
            this.worm.pop();
        } else {
            this.apple = this.createApple();
        }
        


        //지렁이 음식 섭취 여부에 따른 길이 조정
        //지렁이의 상태를 지속적으로 갱신하기 위한 함수
        // 1. 키보드 클릭에 따른 방향 갱신
        // 2. 음식 섭취 여부에 따른 길이 갱신
        // 3. 지렁이 이동 좌표 갱신
        // 4. 지렁이 생사여부 갱신
    } 
  
    getWorm(){
        //화면에 출력할 지렁이 좌표
        return this.worm;
    }

    getApple(){
        //화면에 출력할 음식 좌표
        return this.apple;
    }

    getIsGameOver(){
         //화면에 출력할 게임 종료 여부
         return this.isGameOver;
    }
    
    getHeadDirection(){
        //화면에 출력할 진행 방향 정보
        return this.headDirection;
    }
}